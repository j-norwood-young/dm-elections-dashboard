<script>
  // @ts-nocheck
  import { fly, fade } from "svelte/transition";
  import { numberWithCommas } from "../libs/utils";
  export let tooltipData = {};
  // export let width;
  //$: console.log(tooltipData);
  let tooltipWidth = 200;
  let tooltipHeight = 200;
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
    tooltipData.x + tooltipWidth + xNudge > width ? tooltipData.x - tooltipWidth - xNudge : tooltipData.x + xNudge;
  $: yPosition =
    tooltipData.y + tooltipHeight + yNudge > height ? height - tooltipHeight : tooltipData.y - yNudge;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<!-- in:fly={{ y: 10, duration: 200, delay: 200 }}
  out:fade -->
<div
  
  bind:clientWidth={tooltipWidth}
  bind:clientHeight={tooltipHeight}
  class="electionengine-tooltip-wrapper"
  style="border-left-color:#ececec; top:{yPosition}px; left:{xPosition}px; position:fixed"
>
  <div class="electionengine-tooltip-container">
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Province:</div>
      <div class="electionengine-tooltip-tdata">
        {tooltipData.province}
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Voters Turnout in {tooltipData.province}</div>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{(tooltipData.total_valid_votes / tooltipData.registered_voters) *
                100}%; background:#4CAF50"
            ></div>
          </div>
        </div>
        <span>
          {Math.round((tooltipData.total_valid_votes / tooltipData.registered_voters) * 100)}%</span
        >
      </div>
    </div>
    {#each tooltipData.party as party}
      <div class="electionengine-tooltip-section">
        <div class="electionengine-tooltip-thead">Party: {firstLetterCap(party.party_name)}</div>
        <div class="electionengine-tooltip-tdata">
          {party.seats}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .electionengine-tooltip-wrapper {
    width: 200px;
    position: absolute;
    background: #fffff9;
    padding: 0.55rem;
    border: 1px solid #c7c4c4;
    border-left-width: 6px;
    border-left-style: solid;
  }

  .electionengine-tooltip-section {
    padding-bottom: 4px;
  }
  .electionengine-tooltip-thead {
    font-size: 11px;
    color: #999494;
  }

  .electionengine-tooltip-tdata {
    font-size: 13px;
    color: #2a2a2a;
    font-weight: bold;
    border-bottom: 1px solid #c7c4c4;
  }

  .electionengine-tooltip-range-wrapper {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
  }

  .electionengine-tooltip-range {
    position: relative;
    width: 100%;
    height: 12px;
  }

  .electionengine-tooltip-outer {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #f2f2f2;
    border-radius: 12px;
  }

  .electionengine-tooltip-inner {
    height: 100%;
    width: 73%;
    position: absolute;
    border-radius: inherit;
  }

  .electionengine-tooltip-container > div:last-child .electionengine-tooltip-tdata {
    border-bottom: none;
  }
</style>
