<script>
    // @ts-nocheck
    import { geoIdentity, geoPath } from "d3-geo";
    import { scaleLinear } from "d3-scale";
    import { extent } from "d3-array";
    import { hsl, rgb } from "d3-color";

    import ProvincialPopOver from "../provincialPopOver.svelte";
    import ProvincialLegend from "../provincialLegend.svelte";
    import Loading from "@election-engine/common/loading.svelte";

    export let data;
    export let provincial_map;
    export let national_map;
    export let selected_region;

    // municipal geographical features data;
    let provinces_geo_data;

    // map width and height dimension
    let width = 600;
    let height = 600;

    // array of parties with the highest votes in all municipalities from a province
    let provinces_array;
    let highParty = [];
    let topParties = [];

    let loading = false;

    let provincialPopOverData;

    let provincial_path;
    let national_path;
    let bounding_box;
    let svgWidth = 500;
    let svgHeight = 500;

    const INSET_POS = {
        "Eastern Cape": [450, 0],
        "Free State": [450, 0],
        Gauteng: [140, 0],
        "KwaZulu-Natal": [400, 400],
        Limpopo: [450, 0],
        Mpumalanga: [200, 0],
        "North West": [450, 0],
        "Northern Cape": [450, 0],
        "Western Cape": [450, 0],
    };

    function getTotalParty(data) {
        const municipal = [];
        for (let item in data) {
            const municipal_name = {
                municipal_code: data[item].municipality_name.split(" ")[0],
            };
            if (!data[item].party_ballot_results?.length) continue;
            const highestVotePercParty = data[item].party_ballot_results.sort(
                (a, b) => b.vote_perc - a.vote_perc
            )[0];
            municipal.push(Object.assign(highestVotePercParty, municipal_name));
        }
        const result = provinces_geo_data.map((feature) => {
            const matchingPartyResult = topParties.find(
                (party) =>
                    party.municipality_id === feature.properties.MUNI_CODE ||
                    party.municipality_id === feature.properties.MunicCode
            );

            if (matchingPartyResult) {
                feature.properties.highest_parties =
                    matchingPartyResult.top_parties;
                feature.properties.total_valid_votes =
                    matchingPartyResult.total_valid_votes;
                feature.properties.registered_voters =
                    matchingPartyResult.registered_votes;
                feature.properties.total_votes_cast =
                    matchingPartyResult.total_votes_cast;
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
                total_votes_cast: municipality.total_votes_cast,
                total_valid_votes: municipality.total_valid_votes,
                registered_votes: municipality.registered_voters,
                top_parties: topParties,
            };
        });
    }

    function colorFill(municipal) {
        const color_scale = scaleLinear()
            .domain(extent(highParty, (d) => d?.vote_perc || 0))
            .range([40, 100]);
        if (!municipal.properties.highest_parties?.length) {
            return "#E4E4E4E4";
        }
        const hex = municipal.properties.highest_parties[0].party_color;
        let { r, g, b } = rgb(hsl(hex));
        const opacity =
            color_scale(municipal.properties.highest_parties[0]?.vote_perc) /
            100;
        return rgb(r, g, b, opacity);
    }

    $: {
        provinces_geo_data = provincial_map.features;
        topParties = getTopParties(data);
        highParty = topParties.map((d) => d.top_parties[0]);
        provinces_array = getTotalParty(data);
        const projection = geoIdentity()
            .reflectY(true)
            .fitExtent(
                [
                    [20, 20],
                    [width, height],
                ],
                provincial_map
            );
        provincial_path = geoPath(projection);
    }

    $: {
        const projection = geoIdentity()
            .reflectY(true)
            .fitExtent(
                [
                    [0, 0],
                    [width, height],
                ],
                national_map
            );
        national_path = geoPath(projection);
        const geo_bounding_box = national_path.bounds(provincial_map);
        bounding_box = {
            x: geo_bounding_box[0][0],
            y: geo_bounding_box[0][1],
            width: geo_bounding_box[1][0] - geo_bounding_box[0][0],
            height: geo_bounding_box[1][1] - geo_bounding_box[0][1],
        };
    }
</script>

<div class="electionengine-provincial-map">
    <Loading bind:loading />
    <ProvincialLegend bind:highParty />
    {#if provinces_array}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div bind:clientWidth={svgWidth} bind:clientHeight={svgHeight}>
            <svg
                class="electionengine-map-svg"
                width="100%"
                viewBox="0 0 {width} {height}"
            >
                <!-- Municipalities Group     -->
                <g on:mouseleave={() => (provincialPopOverData = null)}>
                    {#each provinces_array as municipality, index}
                        <g>
                            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <path
                                on:mouseover={(e) => {
                                    if (
                                        !municipality.properties.highest_parties
                                            ?.length
                                    )
                                        return;
                                    provincialPopOverData = {
                                        ...municipality.properties,
                                    };
                                    provincialPopOverData["x"] = e.clientX;
                                    provincialPopOverData["y"] = e.clientY;
                                    provincialPopOverData["index"] = index;
                                    (provincialPopOverData["color"] =
                                        municipality.properties.highest_parties[0].party_color),
                                        index;
                                }}
                                d={provincial_path(municipality)}
                                fill={colorFill(municipality, index)}
                                stroke="white"
                                stroke-width="0.94"
                            />
                        </g>
                    {/each}
                </g>
                <g transform="translate({INSET_POS[selected_region]})">
                    <svg
                        class="electionengine-national-map-inset"
                        width="120"
                        height="100"
                        viewBox="0 0 500 600"
                    >
                        <g class="national_map">
                            <path
                                d={national_path(national_map)}
                                fill="none"
                                stroke="#444444"
                                stroke-width="0.8"
                            />
                        </g>
                        <g class="bounding-box">
                            <rect
                                x={bounding_box.x}
                                y={bounding_box.y}
                                width={bounding_box.width}
                                height={bounding_box.height}
                                fill="red"
                                stroke="black"
                                stroke-width="1"
                                opacity="0.5"
                            />
                        </g>
                    </svg>
                </g>
            </svg>

            {#if provincialPopOverData}
                <ProvincialPopOver
                    bind:provincialPopOverData
                    bind:svgHeight
                    bind:svgWidth
                />
            {/if}
        </div>
    {/if}
</div>

<style>
    .electionengine-provincial-map {
        position: relative;
        width: 100%;
        min-height: 320px;
    }
</style>
