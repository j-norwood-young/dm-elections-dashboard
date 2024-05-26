<script>
  // @ts-nocheck
  import { partyColor } from "@election-engine/common/colors";

  export let seats = [];
  export let total_seats = 0;
  export let cols = 8;
  // export let margin = 1;
  export let offset = true;
  export let hexagon_data;

  //console.log(hexagon_data);

  let seatsData = [];
  let rows = 0;

  $: isGauteng = hexagon_data.province_id === "Gauteng" ? true : false;

  function calculateRows() {
    return Math.ceil(total_seats / cols);
  }

  $: calculateSeats = () => {
    let data = [];
    for (let i = 0; i < total_seats; i++) {
      const d = {
        i,
        party: {},
        color: "#FFFFFF",
        row: Math.floor(i / cols),
        col: i % cols,
      };
      data.push(d);
    }
    let x = 0;
    
    for (let seat of seats) {
      for (let j = 0; j < seat.seats; j++) {
        data[x].party = seat;
        data[x].color = partyColor(seat.party_abbreviation, x);
        data[x].total_seats = total_seats;
        data[x].full_data = hexagon_data;
        
        x++;
      }
    }
    return data;
  };

  $: init = () => {
    rows = calculateRows();
    seatsData = calculateSeats();
  };

  $: init();

  //$: console.log(seats, "seats")
</script>

{#if hexagon_data.province_id === "Gauteng" || hexagon_data.province_id === "KwaZulu-Natal"}
  <div class="electionengine-pr-head" class:gauteng-heading={isGauteng}>
    {hexagon_data.province_id}
  </div>
{/if}
<!-- 
    // mouseover
    on:mouseover={(e) => {
          tooltipData = { ...seat };
          tooltipData["x"] = e.clientX;
          tooltipData["y"] = e.clientY;
        }}

    // mouseleave
    on:mouseleave={() => (tooltipData = null)}

 -->
<svg
  viewBox="0 0 {12 * cols} {10 * rows}"
  class="electionengine-seatwrapper"
  class:gauteng={isGauteng}
  width={18 * cols}
  height={18 * rows}
  role="img"
>
  {#each seatsData as seat}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <g
      transform="
                  translate({offset && seat.row % 2 ? seat.col * 11 + 5 : seat.col * 11} {offset
        ? seat.row * 9
        : seat.row * 11})
              "
             
    >
      <svg
        class="electionengine-seat-hexagons"
        width="12px"
        height="13px"
        viewBox="0 0 15 17"
        on:focus
        role="img"
      >
        <g transform="translate(1, 1)" fill={seat.color} fill-rule="nonzero" stroke="#444444">
          <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"></polygon>
        </g>
      </svg>
    </g>
  {/each}
</svg>

<style>
  .electionengine-pr-head {
    margin: 0 auto;
    font-size: 12px;
    font-weight: 600;
    font-family: "Heebo";
    color: #0c0c0c;
    text-align: center;
  }

  .electionengine-pr-head.gauteng-heading {
    transform: translate(-100%, -740%);
    text-align: unset;
  }

  .electionengine-seatwrapper.gauteng {
    transform: translate(-125%, -125%);
  }

  .electionengine-seat-hexagons {
    outline: none;
  }

  @media (width < 630px) {
    .electionengine-pr-head.gauteng-heading {
      transform: translate(0%, 0%);
      text-align: center;
    }

    .electionengine-seatwrapper.gauteng {
      transform: translate(0%, 0%);
    }
  }
</style>
