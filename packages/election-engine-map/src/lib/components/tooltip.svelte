<script>
    // @ts-nocheck
    export let tooltipData = {};
    // export let width;
    let tooltipWidth = 200;
    let tooltipHeight = 200;
    export let svgWidth;
    export let svgHeight;
    let width;
    let height;

    const xNudge = 30;
    const yNudge = 15;

    function firstLetterCap(string) {
        return string
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    // If the x position + the tooltip width exceeds the chart width, offset backward to prevent overflow
    $: xPosition =
        tooltipData.x + tooltipWidth + xNudge > svgWidth
            ? tooltipData.x - tooltipWidth - xNudge
            : tooltipData.x + xNudge;
    $: yPosition =
        tooltipData.y + tooltipHeight + yNudge > svgHeight
            ? tooltipData.y - tooltipHeight - yNudge
            : tooltipData.y - yNudge;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<!-- in:fly={{ y: 10, duration: 200, delay: 200 }}
  out:fade -->
<div
    bind:clientWidth={tooltipWidth}
    bind:clientHeight={tooltipHeight}
    class="electionengine-tooltip-wrapper"
    style="top:{yPosition}px; left:{xPosition}px;"
>
    <div class="electionengine-tooltip-container">
        <div class="electionengine-tooltip-section">
            <div class="electionengine-tooltip-tdata">
                {tooltipData.province}
            </div>
        </div>
        {#each tooltipData.party as party, i}
            <div
                class="electionengine-tooltip-section"
                style:border-left-color={party.party_color}
            >
                <div class="electionengine-tooltip-thead">
                    <div class="electionengine-party_name">
                        {firstLetterCap(party.party_name)}
                    </div>
                    <div class="electionengine-party-seats">
                        {Math.round(party.vote_perc * 10) / 10}%, {party.seats}
                        seat{party.seats !== 1 ? "s" : ""}
                    </div>
                </div>
            </div>
        {/each}
        <div class="electionengine-tooltip-section">
            <div class="electionengine-tooltip-thead">Valid Votes</div>
            <div class="electionengine-tooltip-tdata">
                {Intl.NumberFormat("en-US").format(
                    tooltipData.total_valid_votes
                )}
                votes
            </div>
            <div class="electionengine-tooltip-thead">Turnout</div>
            <div class="electionengine-tooltip-tdata">
                {tooltipData.percent_voter_turnout.toFixed(2)}%
            </div>
            <div class="electionengine-tooltip-thead">VDs counted</div>
            <div class="electionengine-tooltip-tdata">
                {tooltipData.vd_captured} of{" "}
                {tooltipData.vd_count} ({(
                    (tooltipData.vd_captured / tooltipData.vd_count) *
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
        padding: 0px;
        border: 1px solid #c7c4c4;
        border-left: none;
        border-collapse: collapse;
        z-index: 999;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }

    .electionengine-tooltip-section {
        padding: 5px 10px;
        border-left: #909090 6px solid;
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
        color: #2a2a2a;
        font-weight: bold;
        border-bottom: 1px solid #c7c4c4;

        @media screen and (max-width: 500px) {
            font-size: 10px;
        }
    }

    .electionengine-tooltip-container
        > div:last-child
        .electionengine-tooltip-tdata {
        border-bottom: none;
    }

    .electionengine-party_name {
        color: #232323;
        font-size: 12px;
        font-weight: bold;
    }
</style>
