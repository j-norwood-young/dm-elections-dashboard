<script>
  import { geoIdentity, geoPath } from "d3-geo";
  import CartogramResultShow from "./result-view/cartogramResultShow.svelte";
  import { onMount } from "svelte";

  export let data;
  export let innerWidth;

  $: grid = innerWidth < 630 ? true : false;

  let width = 600;
  let height = 600;
  let provinces;
  let geo_data;

  async function getMap() {
    const response = await fetch("https://iec-api.revengine.dailymaverick.co.za/maps/sa-province.smallest.min.json");
    return response.json();
  }

  onMount(async () => {
    geo_data = await getMap();
    provinces = geo_data.features;
  });

  /**
   * geoIdentity - new geographic projection with an identity transformation
   * [20, 20] - Minimum X and Y coordinates for the map
   * [width, height] - set the map dimensions
   * data - Data to fit the extent
   */
  $: projection = geoIdentity()
    .reflectY(true)
    .fitExtent(
      [
        [20, 20],
        [width, height],
      ],
      geo_data
    );

  // Geographic path generator based on the projection configured above.
  $: path = geoPath(projection);
</script>

{#if provinces}
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

    <CartogramResultShow {provinces} {path} {grid} bind:data />
  </div>
{/if}

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
