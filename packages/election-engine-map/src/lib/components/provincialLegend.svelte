<script>
  import SelectButton from "./selectButton.svelte";
  import { partyColor } from "@election-engine/common/colors";

  export let highParty;

  let sortedPartySeats = [];

  const getUniqueParties = (data) => {
    const seenAbbreviations = new Set();

    return data.filter((item) => {
      if (seenAbbreviations.has(item.party_abbreviation)) {
        return false;
      } else {
        seenAbbreviations.add(item.party_abbreviation);
        return true;
      }
    });
  };

  $: sortedPartySeats = getUniqueParties(highParty);
</script>

<div class="electionengine-legend-heading">Party Colors Legend</div>
<SelectButton>
  <div class="legend-wrapper">
    <div class="legend">
      {#each sortedPartySeats as seat, index}
        <div class="party-wrapper">
          <svg width="12px" height="13px">
            <g
              transform="translate(1, 1)"
              fill={partyColor(seat.party_abbreviation, index)}
              fill-rule="nonzero"
              stroke="#444444"
            >
              <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"></polygon>
            </g>
          </svg>
          <div class="electionengine-legend-partyname">{seat.party_abbreviation} [{seat.seats}]</div>
        </div>
      {/each}
    </div>
  </div>
</SelectButton>

<style>
  .legend-wrapper {
    min-width: 5rem;
    min-height: 2rem;
    position: relative;
    z-index: 99;
  }

  .legend {
    display: flex;
    gap: 1rem;
    padding: 10px 10px;
    border-radius: 4px;
    justify-content: flex-start;
  }

  .party-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .electionengine-legend-heading {
    font-size: 12px;
    font-weight: 600;
    color: #232323;
    margin: 0;
    padding-bottom: 2px;
  }

  .electionengine-legend-partyname {
    color: #292929;
    font-size: 10px;
    font-weight: 600;
  }
</style>
