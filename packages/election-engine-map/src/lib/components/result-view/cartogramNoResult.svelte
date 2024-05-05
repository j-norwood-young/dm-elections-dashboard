<script>
  // import vote2019 from '$lib/data/votes-2019.json';
  import { regionalSeatAllocation } from "../../libs/seats.js";
  import HexagonsNoResult from "./hexagonsNoResult.svelte";

  export let path;
  export let provinces;
  export let grid;

  $: regionBlocks = provinces.map((d) => {
    const coords = path.centroid(d);
    const regionSeat = regionalSeatAllocation.filter((e) => d.properties.PROVINCE === e.region)[0];
    const height = 50;
    const width = 50;
    return {
      coords,
      regionSeat,
      height,
      width,
      x: coords[0],
      y: coords[1],
    };
  });
</script>

<div id="cartogram" class:mb-grid={grid}>
  {#each regionBlocks as region}
    <div
      class="block"
      class:mb-grid={grid}
      style="left:{region.x - region.width / 2}px; top:{region.y - region.height / 2}px;"
    >
      <HexagonsNoResult data={region.regionSeat} {grid} />
    </div>
  {/each}
</div>

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

  .block {
    position: absolute;
    width: 100px;
  }

  .block.mb-grid {
    position: static;
    align-self: center;
    justify-self: center;
  }
</style>
