<script>
  // @ts-nocheck
  export let data;

  let seats;

  function calculateTotalSeats(data) {
    const partySeats = {};
    data.forEach((province) => {
      province.party_ballot_results.forEach((party) => {
        if (partySeats[party.party_abbreviation]) {
          partySeats[party.party_abbreviation].seats += party.seats;
        } else {
          partySeats[party.party_abbreviation] = {
            seats: party.seats,
            color: party.party_color,
            name: party.party_name,
            abbreviation: party.party_abbreviation,
          };
        }
      });
    });

    return partySeats;
  }

  $: init = () => {
    seats = Object.values(calculateTotalSeats(data))
      .sort((a, b) => b.seats - a.seats)
      .filter((party) => party.seats > 0);
  };

  $: init();
</script>

{#if seats.length}
  <div class="legend">
    {#each seats as seat}
      <div class="party-wrapper">
        <svg width="12px" height="13px">
          <g transform="translate(1, 1)" fill={seat.color} fill-rule="nonzero" stroke="#444444">
            <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"></polygon>
          </g>
        </svg>
        <div class="electionengine-legend-partyname">
          {seat.abbreviation} ({seat.seats} seats)
        </div>
      </div>
    {/each}
  </div>
{/if}

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

    @media screen and (max-width: 420px) {
      flex-direction: row;
      bottom: 0;
      flex-wrap: wrap;
    }
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
