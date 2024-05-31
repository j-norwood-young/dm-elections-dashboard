<script>
    // @ts-nocheck
    import { fly, fade } from "svelte/transition";
    import Range from "@election-engine/map/src/lib/components/range.svelte";
    export let provincialPopOverData;

    let tooltipWidth = 200;
    let tooltipHeight = 200;
    export let svgWidth;
    export let svgHeight;
    let width;
    let height;

    const xNudge = 25;
    const yNudge = 10;

    function firstLetterCap(string) {
        return string
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    // If the x position + the tooltip width exceeds the chart width, offset backward to prevent overflow
    $: xPosition =
        provincialPopOverData.x + tooltipWidth + xNudge > svgWidth
            ? provincialPopOverData.x - tooltipWidth - xNudge
            : provincialPopOverData.x + xNudge;
    $: yPosition =
        provincialPopOverData.y + tooltipHeight > svgHeight
            ? provincialPopOverData.y - tooltipHeight
            : provincialPopOverData.y - yNudge;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div
    in:fly={{ y: 10, duration: 200, delay: 200 }}
    out:fade
    bind:clientWidth={tooltipWidth}
    bind:clientHeight={tooltipHeight}
    class="electionengine-tooltip-wrapper"
    style="top:{yPosition}px; left:{xPosition}px; position:fixed; z-index:1000;"
>
    <div class="electionengine-tooltip-container">
        <div class="electionengine-tooltip-section">
            <div class="electionengine-tooltip-tdata">
                {provincialPopOverData.MUNI_NAME ||
                    provincialPopOverData.Municipali ||
                    ""}
            </div>
        </div>
        <div
            style:border-left-color={provincialPopOverData.color}
            class="electionengine-tooltip-section"
        >
            <div class="electionengine-tooltip-thead">Leading party:</div>
            <div class="electionengine-tooltip-tdata">
                {firstLetterCap(
                    provincialPopOverData.highest_parties[0].party_name
                )}
            </div>
            <Range
                color={provincialPopOverData.color}
                value={provincialPopOverData.highest_parties[0].vote_perc}
                max={100}
            />
        </div>
        <div
            class="electionengine-tooltip-section"
            style:border-left-color={provincialPopOverData.highest_parties[1]
                .party_color}
        >
            <div class="electionengine-tooltip-thead">
                1st Runner-Up: {firstLetterCap(
                    provincialPopOverData.highest_parties[1].party_name
                )}
            </div>
            <div class="electionengine-tooltip-tdata">
                <Range
                    value={provincialPopOverData.highest_parties[1].vote_perc}
                    max={100}
                    color={provincialPopOverData.highest_parties[1].party_color}
                />
            </div>
        </div>
        <div
            class="electionengine-tooltip-section"
            style:border-left-color={provincialPopOverData.highest_parties[2]
                .party_color}
        >
            <div class="electionengine-tooltip-thead">
                2nd Runner-Up:{firstLetterCap(
                    provincialPopOverData.highest_parties[2].party_name
                )}
            </div>
            <Range
                value={provincialPopOverData.highest_parties[2].vote_perc}
                max={100}
                color={provincialPopOverData.highest_parties[2].party_color}
            />
        </div>
        <div class="electionengine-tooltip-section">
            <div class="electionengine-tooltip-thead">Valid Votes</div>
            <div class="electionengine-tooltip-tdata">
                {Intl.NumberFormat("en-US").format(
                    provincialPopOverData.total_valid_votes
                )}
                votes
            </div>
            <div class="electionengine-tooltip-thead">Turnout</div>
            <div class="electionengine-tooltip-tdata">
                {provincialPopOverData.percent_voter_turnout.toFixed(2)}%
            </div>
            <div class="electionengine-tooltip-thead">VDs counted</div>
            <div class="electionengine-tooltip-tdata">
                {provincialPopOverData.vd_captured} of{" "}
                {provincialPopOverData.vd_count} ({(
                    (provincialPopOverData.vd_captured /
                        provincialPopOverData.vd_count) *
                    100
                ).toFixed(1)}%) VDs
            </div>
        </div>
    </div>
</div>

<style>
    .electionengine-tooltip-wrapper {
        min-width: max-content;
        position: fixed;
        background: #fffff9;
        border: 1px solid #c7c4c4;
        border-left: none;
        border-collapse: collapse;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }

    .electionengine-tooltip-section {
        padding: 5px 10px;
        border-left: #f5f5f5 8px solid;
    }
    .electionengine-tooltip-thead {
        font-size: 11px;
        color: #999494;

        @media screen and (max-width: 500px) {
            font-size: 9px;
        }
    }

    .electionengine-tooltip-tdata {
        font-size: 13px;
        font-weight: bold;
        color: #2a2a2a;

        @media screen and (max-width: 500px) {
            font-size: 10px;
        }
    }

    .electionengine-tooltip-container
        > div:last-child
        .electionengine-tooltip-tdata {
        border-bottom: none;
    }
</style>
