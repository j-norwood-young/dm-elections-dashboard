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

  $: data2019 = provinces.map((d) => {
    const coords = path.centroid(d);
    const regionSeat = regionalSeatAllocation.filter((e) => d.properties.PROVINCE === e.region)[0];
    const provinceResult = data
      .filter((e) => d.properties.PROVINCE === e.Province)[0]
      .PartyBallotResults.filter((p) => p.NumberOfSeats > 0);
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

<div id="electionengine-cartogram" class:electionengine-mb-grid={grid}>
  {#each data2019 as node}
    <div
      class="electionengine-block"
      class:electionengine-grid-aligncenter={grid}
      style="left:{node.x - node.width / 2}px; top:{node.y - node.height / 2}px;"
    >
      {#if node.provinceResult}
        <Hexagons seats={node.provinceResult} total_seats={node.provinceTotalSeats} {node} {grid} bind:tooltipData />
      {/if}
    </div>
  {/each}
</div>

{#if tooltipData && !grid}
  <Tooltip data={tooltipData} />
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
