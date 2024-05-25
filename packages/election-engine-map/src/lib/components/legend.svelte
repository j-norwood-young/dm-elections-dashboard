<script>
  // @ts-nocheck
  // This needs to be rewritten to use the parties that are in the data
  import SelectButton from "./selectButton.svelte";
  import { partyColors, genericColors } from "@election-engine/common/color-scheme.json";
  import { partyColor } from "@election-engine/common/colors";

  export let data;

  let sortedPartySeats;

  let colors = [];
  for (const [party, color] of Object.entries(partyColors)) {
    colors.push({ party, color });
  }

  function calculateTotalSeats(data) {
    const partySeats = {};

    data.forEach((province) => {
      province.party_ballot_results.forEach((party) => {
        if (partySeats[party.party_abbreviation]) {
          partySeats[party.party_abbreviation] += party.seats;
        } else {
          partySeats[party.party_abbreviation] = party.seats;
        }
      });
    });

    return partySeats;
  }

  $: init = () => {
    const seats = calculateTotalSeats(data);
    sortedPartySeats = Object.keys(seats)
      .sort((a, b) => seats[b] - seats[a])
      .map((party, index) => ({ name: party, seats: seats[party], color: partyColor(party, index) }))
      .filter((party) => party.seats > 0);

    return sortedPartySeats;
  };

  $: init();
</script>

<div class="electionengine-legend-heading">Party Colors Legend</div>
<SelectButton>
  <div class="legend-wrapper">
    <div class="legend">
      {#each sortedPartySeats as seat}
        <div class="party-wrapper">
          <svg width="12px" height="13px">
            <g transform="translate(1, 1)" fill={seat.color} fill-rule="nonzero" stroke="#444444">
              <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"></polygon>
            </g>
          </svg>
          <div class="electionengine-legend-partyname">{seat.name} [{seat.seats}]</div>
        </div>
      {/each}
    </div>
  </div>
</SelectButton>

<style>
  .legend-wrapper {
    position: relative;
    padding: 10px;
    z-index: 99;
  }

  .legend {
    display: flex;
    gap: 1rem;
    padding: 10px 10px;
    border-radius: 4px;
    width: 360px;
    justify-content: flex-start;
    overflow-x: scroll;
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
