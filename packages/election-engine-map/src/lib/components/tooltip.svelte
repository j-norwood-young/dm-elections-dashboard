<script>
  import { fly, fade } from "svelte/transition";
  import { numberWithCommas } from "../libs/utils";
  export let data;
  // export let width;

  let tooltipWidth;
  let tooltipHeight;
  let winY;
  let width;
  let height;

  const xNudge = 65;
  const yNudge = 60;

  // If the x position + the tooltip width exceeds the chart width, offset backward to prevent overflow
  $: xPosition =
    data.cord_x + tooltipWidth + xNudge > width ? data.cord_x - tooltipWidth - xNudge : data.cord_x + xNudge;
  $: yPosition =
    data.cord_y + tooltipHeight + yNudge > height ? data.cord_y - tooltipHeight - yNudge : data.cord_y + yNudge;
</script>

<svelte:window bind:scrollY={winY} bind:innerWidth={width} bind:innerHeight={height} />
<div
  in:fly={{ y: 10, duration: 200, delay: 200 }}
  out:fade
  bind:clientWidth={tooltipWidth}
  bind:clientHeight={tooltipHeight}
  class="electionengine-tooltip-wrapper"
  style="border-left-color:{data.color}; top:{yPosition}px; left:{xPosition}px"
>
  <div class="electionengine-tooltip-container">
    <div class="electionengine-tooltip-section">
      <p class="electionengine-tooltip-thead">Party:</p>
      <p class="electionengine-tooltip-tdata">{data.party.Name}</p>
    </div>
    <div class="electionengine-tooltip-section">
      <p class="electionengine-tooltip-thead">Percentage of Seats Won in Limpopo</p>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{data.party.Percentage}%; background:{data.color}"
            ></div>
          </div>
        </div>
        <span> {Math.round(data.party.Percentage)}%</span>
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <p class="electionengine-tooltip-thead">Total Number of Seats Won in Limpopo</p>
      <p class="electionengine-tooltip-tdata">{data.party.NumberOfSeats} / {data.total_seats}</p>
    </div>
    <div class="electionengine-tooltip-section">
      <p class="electionengine-tooltip-thead">Total Votes</p>
      <p class="electionengine-tooltip-tdata">{numberWithCommas(data.party.Votes)}</p>
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
