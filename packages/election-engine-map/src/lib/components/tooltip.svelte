<script>
  import { fly, fade } from "svelte/transition";
  import { numberWithCommas } from "../libs/utils";
  export let tooltipData;
  export let grid;
  // export let width;

  let tooltipWidth;
  let tooltipHeight;
  let width;
  let height;

  const xNudge = grid ? 5 : 65;
  const yNudge = grid ? 45 : 95;

  // If the x position + the tooltip width exceeds the chart width, offset backward to prevent overflow
  $: xPosition =
    tooltipData.x + tooltipWidth + xNudge > width ? tooltipData.x - tooltipWidth - xNudge : tooltipData.x + xNudge;
  $: yPosition =
    tooltipData.y + tooltipHeight + yNudge > height ? tooltipData.y - tooltipHeight - yNudge : tooltipData.y - yNudge;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div
  in:fly={{ y: 10, duration: 200, delay: 200 }}
  out:fade
  bind:clientWidth={tooltipWidth}
  bind:clientHeight={tooltipHeight}
  class="electionengine-tooltip-wrapper"
  style="border-left-color:{tooltipData.color}; top:{yPosition}px; left:{xPosition}px"
>
  <div class="electionengine-tooltip-container">
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Party:</div>
      <div class="electionengine-tooltip-tdata">{tooltipData.party.party_name}</div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Percentage of Seats Won in Limpopo</div>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{tooltipData.party.vote_perc}%; background:{tooltipData.color}"
            ></div>
          </div>
        </div>
        <span> {Math.round(tooltipData.party.vote_perc)}%</span>
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Total Number of Seats Won in Limpopo</div>
      <div class="electionengine-tooltip-tdata">{tooltipData.party.seats} / {tooltipData.total_seats}</div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Total Votes</div>
      <div class="electionengine-tooltip-tdata">{numberWithCommas(tooltipData.party.votes)}</div>
    </div>
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
