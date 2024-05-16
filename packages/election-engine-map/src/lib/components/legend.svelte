<script>
  // @ts-nocheck
  // This needs to be rewritten to use the parties that are in the data
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
      province.PartyBallotResults.forEach((party) => {
        if (partySeats[party.Abbreviation]) {
          partySeats[party.Abbreviation] += party.NumberOfSeats;
        } else {
          partySeats[party.Abbreviation] = party.NumberOfSeats;
        }
      });
    });

    return partySeats;
  }

  function init() {
    const seats = calculateTotalSeats(data);
    sortedPartySeats = Object.keys(seats)
      .sort((a, b) => seats[b] - seats[a])
      .map((party, index) => ({ name: party, seats: seats[party], color: partyColor(party, index) }))
      .filter((party) => party.seats > 0);

    return sortedPartySeats;
  }

  init();
</script>

<div class="legend-wrapper">
  <h2>Legend: Party Colors</h2>
  <div class="legend">
    {#each sortedPartySeats as seat}
      <div class="party-wrapper">
        <svg width="12px" height="13px">
          <g transform="translate(1, 1)" fill={seat.color} fill-rule="nonzero" stroke="#444444">
            <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"></polygon>
          </g>
        </svg>
        <p>{seat.name}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .legend-wrapper {
    position: relative;
    margin-bottom: 1rem;
    z-index: 99;
  }
  .legend {
    display: flex;
    gap: 1rem;
    padding: 10px 10px;
    background: #f4f0f0;
    border-radius: 4px;
    width: 360px;
    justify-content: space-between;
    overflow-x: scroll;
  }

  .party-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  h2 {
    font-size: 12px;
    margin: 0;
    padding-bottom: 2px;
  }

  p {
    color: #828282;
    font-size: 10px;
  }

  .hexagon {
    width: 12px;
    height: 12px;
    background: black;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  }
</style>
