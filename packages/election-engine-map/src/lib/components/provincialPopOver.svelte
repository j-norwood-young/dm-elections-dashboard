<script>
  // @ts-nocheck
  import { fly, fade } from "svelte/transition";

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

  $: console.log(provincialPopOverData);
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
        {provincialPopOverData.MUNI_NAME}
      </div>
    </div>
    <div style:border-left-color={provincialPopOverData.color} class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Winning Party:</div>
      <div class="electionengine-tooltip-tdata">
        {firstLetterCap(provincialPopOverData.highest_parties[0].party_name)}
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">
        {provincialPopOverData.highest_parties[0].party_abbreviation} Votes Percentage {provincialPopOverData.MUNI_NAME}
      </div>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{provincialPopOverData.highest_parties[0]
                .vote_perc}%; background:{provincialPopOverData.color}"
            ></div>
          </div>
        </div>
        <span class="electionengine-tooltip-span">
          {Math.round(provincialPopOverData.highest_parties[0].vote_perc)}%</span
        >
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">
        Runner-Up 1: {firstLetterCap(provincialPopOverData.highest_parties[1].party_name)}
      </div>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{provincialPopOverData.highest_parties[1].vote_perc}%; background:{provincialPopOverData
                .highest_parties[1].party_color}"
            ></div>
          </div>
        </div>
        <span class="electionengine-tooltip-span">
          {Math.round(provincialPopOverData.highest_parties[1].vote_perc)}%</span
        >
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">
        Runner-Up 2:{firstLetterCap(provincialPopOverData.highest_parties[2].party_name)}
      </div>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{provincialPopOverData.highest_parties[2].vote_perc}%; background:{provincialPopOverData
                .highest_parties[2].party_color}"
            ></div>
          </div>
        </div>
        <span class="electionengine-tooltip-span">
          {Math.round(provincialPopOverData.highest_parties[2].vote_perc)}%</span
        >
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">
        Seats Won by <span class="electionengine-tooltip-span-bold">
          {provincialPopOverData.highest_parties[0].party_abbreviation}
        </span>
      </div>
      <div class="electionengine-tooltip-tdata">
        {provincialPopOverData.highest_parties[0].seats} seats
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Valid Votes & Voters Turnout in {provincialPopOverData.MUNI_NAME}</div>
      <div class="electionengine-tooltip-tdata">
        <span> {Intl.NumberFormat("en-US").format(provincialPopOverData.total_valid_votes)} </span><span
          class="electionengine-tooltip-span-regular"
        >
          votes
        </span>
        (<span>
          {Math.round((provincialPopOverData.total_valid_votes / provincialPopOverData.registered_voters) * 100)}%
        </span>
        <span class="electionengine-tooltip-span-regular"> turnout</span>)
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

    @media screen and (max-width: 500px) {
      height: 6px;
    }
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

  .electionengine-tooltip-span {
    text-wrap: nowrap;
  }

  .electionengine-tooltip-span-regular {
    text-wrap: nowrap;
  }

  .electionengine-tooltip-container > div:last-child .electionengine-tooltip-tdata {
    border-bottom: none;
  }
</style>
