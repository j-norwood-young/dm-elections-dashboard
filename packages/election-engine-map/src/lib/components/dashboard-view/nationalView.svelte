<script>
    // @ts-nocheck
    import { geoIdentity, geoPath } from "d3-geo";
    import { onMount } from "svelte";
    import Legend from "../legend.svelte";
    import Hexagons from "../result-view/hexagons.svelte";
    import Tooltip from "../tooltip.svelte";
    import SEATS from "@election-engine/common/seat_counts.json";

    export let data;
    export let selected_year;

    let width = 800;
    let height = 800;
    let provinces;
    let geo_data;
    let tooltipData;

    async function getMap() {
        const response = await fetch(
            "https://iec-api.revengine.dailymaverick.co.za/maps/sa-province.smallest.min.json"
        );
        return response.json();
    }

    onMount(async () => {
        geo_data = await getMap();
        attach_data_to_map();
    });

    function position_hexagons(province) {
        const center = path.centroid(province);
        const top = center[1] - 20;
        const left = center[0] - 40;
        return `translate(${left}, ${top})`;
    }

    function attach_data_to_map() {
        console.log("Attaching data to map");
        if (!data || !geo_data) return;
        provinces = geo_data.features;
        for (let province of provinces) {
            const province_data = data.find(
                (d) => d.province_name === province.properties.PROVINCE
            );
            const total_seats =
                SEATS["national"][selected_year][province.properties.PROVINCE];
            if (province_data) {
                province.properties = {
                    ...province.properties,
                    ...province_data,
                    total_seats,
                };
            }
        }
        console.log(provinces);
    }

    /**
     * geoIdentity - new geographic projection with an identity transformation
     * [20, 20] - Minimum X and Y coordinates for the map
     * [width, height] - set the map dimensions
     * data - Data to fit the extent
     */
    $: projection = geoIdentity()
        .reflectY(true)
        .fitExtent(
            [
                [20, 20],
                [width, height],
            ],
            geo_data
        );

    // Geographic path generator based on the projection configured above.
    $: path = geoPath(projection);

    $: attach_data_to_map();
</script>

{#if data}
    <Legend bind:data />
{/if}

<p>
    {selected_year} 200 Regional Seats, divided between the regions* based on registered
    population, prior to the elections. The regions are contested by parties and
    independent candidates.
</p>

{#if data && provinces}
    {#if tooltipData}
        <Tooltip bind:tooltipData grid={false} />
    {/if}
    <div class="electionengine-svg-wrapper">
        <svg class="electionengine-map-svg" viewBox="0 0 800 800" width="100%">
            <!-- Countries -->
            <g id="saMap">
                {#each provinces as province}
                    <g class="province">
                        <path
                            d={path(province)}
                            fill="#ECECEC"
                            stroke="white"
                            stroke-width="0.94"
                        />
                    </g>
                {/each}
                {#each provinces as province}
                    {#if province.properties.PROVINCE === "Gauteng"}
                        <g transform="translate({[350, 150]})">
                            <text
                                x="0"
                                y="0"
                                font-size="0.8rem"
                                font-weight="bold"
                                fill="black"
                                text-anchor="left"
                            >
                                {province.properties.PROVINCE}
                            </text>
                            <g transform="translate(0, 8)">
                                <Hexagons
                                    bind:seats={province.properties
                                        .party_ballot_results}
                                    bind:total_seats={province.properties
                                        .total_seats}
                                    bind:hexagon_data={province.properties}
                                    bind:tooltipData
                                />
                            </g>
                            <!-- Draw a line to Gauteng -->
                            <line
                                x1="140"
                                y1="5"
                                x2={path.centroid(province)[0] - 350}
                                y2={path.centroid(province)[1] - 150}
                                stroke="black"
                                stroke-width="2"
                            />
                            <line
                                x1="0"
                                y1="5"
                                x2="140"
                                y2="5"
                                stroke="black"
                                stroke-width="2"
                            />
                            <circle
                                cx={path.centroid(province)[0] - 350}
                                cy={path.centroid(province)[1] - 150}
                                r="5"
                                fill="black"
                            />
                        </g>
                    {:else}
                        <g transform={position_hexagons(province)}>
                            <text
                                x="0"
                                y="0"
                                font-size="0.8rem"
                                font-weight="bold"
                                fill="black"
                                text-anchor="left"
                            >
                                {province.properties.PROVINCE}
                            </text>
                            <g transform="translate(0, 8)">
                                <Hexagons
                                    bind:seats={province.properties
                                        .party_ballot_results}
                                    bind:total_seats={province.properties
                                        .total_seats}
                                    bind:hexagon_data={province.properties}
                                    bind:tooltipData
                                />
                            </g>
                        </g>
                    {/if}
                {/each}
            </g>
        </svg>
    </div>
{/if}

<style>
    .electionengine-svg-wrapper {
        width: 100%;
    }
    @media (width < 400px) {
        p {
            font-size: 0.8rem;
        }
    }
</style>
