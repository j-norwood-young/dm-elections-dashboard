<script>
  import { fly, fade } from "svelte/transition";

  import { partyColor } from "@election-engine/common/colors";

  export let provincialPopOverData;

  let tooltipWidth;
  let tooltipHeight;
  let width;
  let height;

  const xNudge = 65;
  const yNudge = 55;

  function firstLetterCap(string) {
    const str = string.toLowerCase();
    const word = str.charAt(0).toUpperCase() + str.slice(1);

    return word;
  }

  // If the x position + the tooltip width exceeds the chart width, offset backward to prevent overflow
  $: xPosition =
    provincialPopOverData.x + tooltipWidth + xNudge > width
      ? provincialPopOverData.x - tooltipWidth - xNudge
      : provincialPopOverData.x + xNudge - 40;
  $: yPosition =
    provincialPopOverData.y + tooltipHeight + yNudge > height
      ? provincialPopOverData.y - tooltipHeight - yNudge + 250
      : provincialPopOverData.y - yNudge + 40;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<div
  in:fly={{ y: 10, duration: 200, delay: 200 }}
  out:fade
  bind:clientWidth={tooltipWidth}
  bind:clientHeight={tooltipHeight}
  class="electionengine-tooltip-wrapper"
  style="border-left-color:{provincialPopOverData.color}; top:{yPosition}px; left:{xPosition}px"
>
  <div class="electionengine-tooltip-container">
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Municipality:</div>
      <div class="electionengine-tooltip-tdata">{provincialPopOverData.MUNI_NAME}</div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Winning Party:</div>
      <div class="electionengine-tooltip-tdata">
        {firstLetterCap(provincialPopOverData.highest_parties[0].party_name)}
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Votes Percentage {provincialPopOverData.MUNI_NAME}</div>
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
        <span> {Math.round(provincialPopOverData.highest_parties[0].vote_perc)}%</span>
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Runner-Up 1:{provincialPopOverData.highest_parties[1].party_name}</div>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{provincialPopOverData.highest_parties[1].vote_perc}%; background:{partyColor(
                provincialPopOverData.highest_parties[1].party_abbreviation,
                provincialPopOverData.index
              )}"
            ></div>
          </div>
        </div>
        <span> {Math.round(provincialPopOverData.highest_parties[1].vote_perc)}%</span>
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Runner-Up 2:{provincialPopOverData.highest_parties[2].party_name}</div>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{provincialPopOverData.highest_parties[2].vote_perc}%; background:{partyColor(
                provincialPopOverData.highest_parties[2].party_abbreviation,
                provincialPopOverData.index
              )}"
            ></div>
          </div>
        </div>
        <span> {Math.round(provincialPopOverData.highest_parties[2].vote_perc)}%</span>
      </div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Total Number of Seats Won in {provincialPopOverData.MUNI_NAME}</div>
      <div class="electionengine-tooltip-tdata">{provincialPopOverData.highest_parties[0].seats}</div>
    </div>
    <div class="electionengine-tooltip-section">
      <div class="electionengine-tooltip-thead">Total Votes</div>
      <div class="electionengine-tooltip-tdata">
        {Intl.NumberFormat("en-US").format(provincialPopOverData.highest_parties[0].votes)}
      </div>
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
