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

<div class="legend">
  {#each sortedPartySeats as seat}
    <div class="party-wrapper">
      <svg width="12px" height="13px">
        <g transform="translate(1, 1)" fill={seat.color} fill-rule="nonzero" stroke="#444444">
          <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"></polygon>
        </g>
      </svg>
      <div class="electionengine-legend-partyname">{seat.name} ({seat.seats} seats)</div>
    </div>
  {/each}
</div>

<style>
  .legend {
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    z-index: 99;
    display: flex;
    gap: 5px;
    padding: 5px;
    margin: 10px 0px;
    border-radius: 4px;
    justify-content: flex-start;
    flex-direction: column;
  }

  .party-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: left;
    align-items: center;
    flex-shrink: 0;
  }

  .electionengine-legend-partyname {
    color: #292929;
    font-size: 10px;
    font-weight: 600;
  }
</style>
