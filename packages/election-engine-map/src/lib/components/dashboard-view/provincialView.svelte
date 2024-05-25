<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    import { geoIdentity, geoPath } from "d3-geo";
    import { scaleLinear } from "d3-scale";
    import { extent } from "d3-array";
    import { hsl, rgb } from "d3-color";

    import { loadData } from "@election-engine/common/loadData";
    import { maps_endpoint } from "../../libs/maps";
    import { partyColor } from "@election-engine/common/colors";
    import ProvincialPopOver from "../provincialPopOver.svelte";
    import ProvincialLegend from "../provincialLegend.svelte";

    export let selected_year = 2024;
    export let selected_region = "Eastern Cape";
    export let provinces;
    export let innerWidth;

    export let data;

    // API base url
    const base_url = "https://iec-api.revengine.dailymaverick.co.za";

    // municipal geographical data;
    let geo_data;

    // municipal geographical features data;
    let provinces_geo_data;

    // map width and height dimension
    let width = 600;
    let height = 600;

    // array of parties with the highest votes in all municipalities from a province
    let provinces_array;
    let highParty = [];
    let topParties = [];

    $: isMediaScreenSmall = innerWidth < 630 ? true : false;
    let isExpanded = false;

    let provincialPopOverData;

    function getTotalParty(data) {
        const municipal = [];
        for (let item in data) {
            const municipal_name = {
                municipal_code: data[item].municipality_name.split(" ")[0],
            };
            const highestVotePercParty = data[item].party_ballot_results.sort(
                (a, b) => b.vote_perc - a.vote_perc
            )[0];
            municipal.push(Object.assign(highestVotePercParty, municipal_name));
        }
        const result = provinces_geo_data.map((feature) => {
            const matchingPartyResult = topParties.find(
                (party) =>
                    party.municipality_id === feature.properties.MUNI_CODE
            );
            if (matchingPartyResult) {
                feature.properties.highest_parties =
                    matchingPartyResult.top_parties;
            }
            return feature;
        });
        return result;
    }

    function getTopParties(data) {
        return data.map((municipality) => {
            const topParties = municipality.party_ballot_results
                .sort((a, b) => b.vote_perc - a.vote_perc)
                .slice(0, 3);
            return {
                municipality_id: municipality.municipality_name.split(" ")[0],
                municipality_name: municipality.municipality_name,
                top_parties: topParties,
            };
        });
    }

    onMount(async () => {
        setData({ year: selected_year, region: selected_region });
    });

    async function getMapData(url) {
        const d = await fetch(url);
        return d.json();
    }

    async function getData({ year, region }) {
        const provincial_seats_result = await loadData({
            year,
            region,
            election: "Provincial Legislature",
        });
        return provincial_seats_result.municipal_results;
    }

    async function setData({ year, region }) {
        selected_region = region;
        data = await getData({ year, region });
        const province_map_code = maps_endpoint.filter(
            (d) => d.region === region
        )[0].endpoint;
        const map_url = `${base_url}/maps/${selected_year}/sa-munic-${province_map_code}.geojson.min.json`;
        geo_data = await getMapData(map_url);
        provinces_geo_data = geo_data.features;
        provinces_array = getTotalParty(data);
        topParties = getTopParties(data);
        highParty = topParties.map((d) => d.top_parties[0]);
        provinces_array = getTotalParty(data);
    }

    $: color_scale = scaleLinear()
        .domain(extent(highParty, (d) => d.vote_perc))
        .range([40, 100]);

    $: colorFill = (municipal, index) => {
        const hex = partyColor(
            municipal.properties.highest_parties[0].party_abbreviation,
            index
        );
        let { r, g, b } = rgb(hsl(hex));
        const opacity =
            color_scale(municipal.properties.highest_parties[0].vote_perc) /
            100;
        return rgb(r, g, b, opacity);
    };

    function changeExpandable() {
        isExpanded = !isExpanded;
    }

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
</script>

<!--  DESKTOP DOWN TAKE NOTE REMOVE COMMENT ON LARGE SCREEN -->
{#if isMediaScreenSmall}
    <div
        class="electionengine-selectdropdown-wrapper electionengine-dropdown-form"
    >
        <button
            class="electionengine-dropdown-select"
            class:electionengine-provincial-dropdown={isExpanded}
            on:click={changeExpandable}>{selected_region}</button
        >
        {#if isExpanded}
            <div
                transition:slide
                class="electionengine-selectbutton-dropdown-wrapper"
            >
                {#each provinces as province}
                    <button
                        class="electionengine-year-button electionengine-dropdown-button"
                        class:selected={selected_region === province}
                        on:click={() => {
                            setData({ year: selected_year, region: province });
                            isExpanded = !isExpanded;
                        }}
                    >
                        {province}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
{:else}
    <div class="electionengine-selectbutton-wrapper">
        {#each provinces as province}
            <button
                class="electionengine-year-button"
                class:selected={selected_region === province}
                on:click={() =>
                    setData({ year: selected_year, region: province })}
            >
                {province}
            </button>
        {/each}
    </div>
{/if}

<ProvincialLegend bind:highParty />

{#if provinces_array}
    <div class="electionengine-svg-wrapper">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <svg
            class="electionengine-map-svg"
            {width}
            {height}
            viewBox="0 0 {width} {height}"
        >
            <!-- Municipalities Group -->
            <g id="saMap" on:mouseleave={() => (provincialPopOverData = null)}>
                {#each provinces_array as municipality, index}
                    <g>
                        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <path
                            on:mouseover={(e) => {
                                provincialPopOverData = {
                                    ...municipality.properties,
                                };
                                provincialPopOverData["x"] = e.x;
                                provincialPopOverData["y"] = e.y;
                                provincialPopOverData["index"] = index;
                                provincialPopOverData["color"] = partyColor(
                                    municipality.properties.highest_parties[0]
                                        .party_abbreviation,
                                    index
                                );
                            }}
                            d={path(municipality)}
                            fill={colorFill(municipality, index)}
                            stroke="white"
                            stroke-width="0.94"
                        />
                    </g>
                {/each}
            </g>
        </svg>
    </div>
    {#if provincialPopOverData}
        <ProvincialPopOver bind:provincialPopOverData />
    {/if}
{:else}
    <p>checking out</p>
{/if}

<style>
    .electionengine-selectbutton-dropdown-wrapper {
        margin-top: 0.3rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid #cbcbcb;
        position: absolute;
        z-index: 9999;
        width: 100%;
    }

    .electionengine-selectbutton-dropdown-wrapper
        .electionengine-dropdown-button {
        width: 100%;
        display: block;
        color: #cbcbcb;
        background-color: transparent;
        border-radius: 0;
        border: none;
        margin: 0;
    }

    .electionengine-selectbutton-dropdown-wrapper
        .electionengine-dropdown-button:hover {
        background: #f1fff1;
    }

    .electionengine-selectbutton-wrapper .electionengine-year-button.selected,
    .electionengine-selectbutton-dropdown-wrapper
        .electionengine-dropdown-button.selected,
    .electionengine-selectbutton-dropdown-wrapper
        .electionengine-dropdown-button:active {
        background-color: #4caf50;
        color: white;
    }

    .electionengine-dropdown-form {
        position: relative;
        width: 300px;
    }

    .electionengine-dropdown-select:hover,
    .electionengine-dropdown-select:focus {
        outline: 1px solid limegreen;
        cursor: pointer;
    }

    .electionengine-dropdown-select {
        position: relative;
        width: 100%;
        padding: 10px 24px;
        border-radius: 6px;
        border: 1px solid #cbcbcb;
        color: #cbcbcb;
        margin: 0;
    }

    .electionengine-year-button {
        border: 0;
        background-color: white;
        border-radius: 0px;
        border-bottom: 2px solid #cbcbcb;
    }

    @media (width < 420px) {
        .electionengine-selectbutton-wrapper {
            font-size: 11px;
            border: 0.76px solid #cbcbcb;
            border-radius: 6.85px;
        }
    }
</style>
