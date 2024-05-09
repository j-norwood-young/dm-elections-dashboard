<script>
  // import vote2019 from '$lib/data/votes-2019.json';
  import { regionalSeatAllocation } from "../../libs/seats.js";
  import Tooltip from "../tooltip.svelte";

  import Hexagons from "./hexagonsResultShow.svelte";

  export let path;
  export let provinces;
  export let grid;
  export let data;

  let tooltipData;

  $: data2019 = provinces.map((d) => {
    const coords = path.centroid(d);
    const regionSeat = regionalSeatAllocation.filter((e) => d.properties.PROVINCE === e.region)[0];
    const provinceResult = data.filter((e) => d.properties.PROVINCE === e.Province);
    const provinceID = d.properties.PROVINCE;
    const provinceTotalSeats = regionSeat.seat;
    const height = 50;
    const width = 50;
    return {
      provinceID,
      provinceTotalSeats,
      coords,
      regionSeat,
      provinceResult,
      height,
      width,
      x: coords[0],
      y: coords[1],
    };
  });
</script>

<div id="cartogram" class:mb-grid={grid}>
  {#each data2019 as node}
    <div class="block" class:mb-grid={grid} style="left:{node.x - node.width / 2}px; top:{node.y - node.height / 2}px;">
      <Hexagons {node} {grid} bind:tooltipData />
    </div>
  {/each}
</div>

{console.log(tooltipData)}

{#if tooltipData}
  <Tooltip data={tooltipData} />
{/if}

<style>
  #cartogram {
    width: 600px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #cartogram.mb-grid {
    width: 100%;
    height: 450px;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .electionengine-block {
    position: absolute;
    width: 100px;
  }

  .electionengine-block.mb-grid {
    position: static;
    align-self: center;
    justify-self: center;
  }
</style>
