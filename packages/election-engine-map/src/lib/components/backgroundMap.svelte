<script>
  import geoData from "../../data/sa-province.smallest.min.json";
  import { geoArea, geoIdentity, geoPath } from "d3-geo";
  import CartogramResultShow from "./result-view/cartogramResultShow.svelte";
  // import CartogramNoResult from "./result-view/cartogramNoResult.svelte";

  export let data;
  export let innerWidth;

  $: grid = innerWidth < 630 ? true : false;

  let width = 600;
  let height = 600;

  let provinces = geoData.features;

  /**
   * geoIdentity - new geographic projection with an identity transformation
   * [20, 20] - Minimum X and Y coordinates for the map
   * [width, height] - set the map dimensions
   * data - Data to fit the extent
   */
  const projection = geoIdentity()
    .reflectY(true)
    .fitExtent(
      [
        [20, 20],
        [width, height],
      ],
      geoData
    );

  // Geographic path generator based on the projection configured above.
  const path = geoPath(projection);
</script>

<div class="electionengine-svg-wrapper">
  {#if !grid}
    <svg class="electionengine-map-svg" {width} {height}>
      <!-- Countries -->
      <g id="saMap">
        {#each provinces as province}
          <path d={path(province)} fill="#ECECEC" stroke="white" stroke-width="0.94" />
        {/each}
      </g>
    </svg>
  {/if}
  <!-- <CartogramNoResult {path} {grid} {provinces} /> -->
  <CartogramResultShow {provinces} {path} {grid} bind:data />
</div>

<style>
  .electionengine-svg-wrapper {
    position: relative;
    height: 100vh;
    margin-top: -1.75rem;
    transform: translate(-30px, 10px);
  }

  .electionengine-map-svg {
    position: absolute;
  }

  @media (width < 630px) {
    .electionengine-svg-wrapper {
      margin-top: 1rem;
      transform: translate(0, 0);
    }
  }
</style>
