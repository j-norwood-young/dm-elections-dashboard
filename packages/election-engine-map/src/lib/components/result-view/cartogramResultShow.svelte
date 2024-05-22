<script>
  // import vote2019 from '$lib/data/votes-2019.json';
  import { regionalSeatAllocation } from "../../libs/seats.js";

  import Hexagons from "./hexagons.svelte";
  import Tooltip from "../tooltip.svelte";

  export let path;
  export let provinces;
  export let grid;
  export let data;

  let tooltipData;
  let cartogram_data = {};

  $: init = () => {
    cartogram_data = provinces.map((d) => {
      const coords = path.centroid(d);
      const region_seat = regionalSeatAllocation.filter((e) => d.properties.PROVINCE === e.region)[0];
      const province_result = data
        .filter((e) => d.properties.PROVINCE === e.province_name)[0]
        .party_ballot_results.filter((p) => p.seats > 0);
      const province_id = d.properties.PROVINCE;
      const province_total_seats = region_seat.seat;
      const height = 50;
      const width = 50;
      return {
        province_id,
        province_total_seats,
        coords,
        region_seat,
        province_result,
        height,
        width,
        x: coords[0],
        y: coords[1],
      };
    });
  };

  $: init();
</script>

<div id="electionengine-cartogram" class:electionengine-mb-grid={grid}>
  {#each cartogram_data as hexagon_data}
    <div
      class="electionengine-block"
      class:electionengine-grid-aligncenter={grid}
      style="left:{hexagon_data.x - hexagon_data.width / 2}px; top:{hexagon_data.y - hexagon_data.height / 2}px;"
    >
      <Hexagons
        seats={hexagon_data.province_result}
        total_seats={hexagon_data.province_total_seats}
        {hexagon_data}
        {grid}
        bind:tooltipData
      />
    </div>
  {/each}
</div>

{#if tooltipData}
  <Tooltip bind:tooltipData {grid} />
{/if}

<style>
  #electionengine-cartogram {
    width: 600px;
    height: 600px;
    position: absolute;
  }

  #electionengine-cartogram.electionengine-mb-grid {
    width: 100%;
    height: 450px;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .electionengine-block {
    position: absolute;
    display: block;
  }

  .electionengine-block.electionengine-grid-aligncenter {
    position: static;
    align-self: center;
    justify-self: center;
  }
</style>
