<script>
  import { onMount } from "svelte";
  import { geoIdentity, geoPath } from "d3-geo";
  import PROVINCES from "@election-engine/common/provinces.json";
  import { loadData } from "@election-engine/common/loadData";
  import { maps_endpoint } from "../../libs/maps";
  import { scaleOrdinal } from "d3-scale";

  export let year;

  const baseUrl = "https://iec-api.revengine.dailymaverick.co.za";

  let color_range = ["low", "medium", "high"];
  let provinces = PROVINCES;
  let region = "Eastern Cape";
  let election = "Provincial Legislature";

  let province_map_code = "ec";
  let map_url = `${baseUrl}/maps/sa-munic-${province_map_code}.geojson.min.json`;
  let data;
  let geoData;
  let provincesMap;
  let width = 600;
  let height = 600;
  let total_results = [];

  let color_scale = scaleOrdinal().domain(color_range).range(["#CF251E", "#f77f00", "#fcbf49"]);

  async function setData(province) {
    region = province;
    province_map_code = maps_endpoint.filter((d) => d.region === province)[0].endpoint;
    map_url = `${baseUrl}/maps/sa-munic-${province_map_code}.geojson.min.json`;
    geoData = await getMapData(map_url);
    provincesMap = geoData.features;
    data = await getData({ year, election, province });
  }

  async function getMapData(map_url) {
    const d = await fetch(map_url);
    return d.json();
  }

  onMount(async () => {
    geoData = await getMapData(map_url);
    data = await loadData({ year, election, region });
    provincesMap = geoData.features;
    total_results = data.municipal_results.map((d) => {
      const municipal = d.municipality_name;
      const votes = d.total_votes_cast;
      const range =
        d.total_votes_cast <= 100000
          ? "low"
          : d.total_votes_cast <= 400000
          ? "medium"
          : d.total_votes_cast > 400000
          ? "high"
          : null;
      return {
        municipal,
        votes,
        range,
      };
    });
  });

  $: projection = geoIdentity()
    .reflectY(true)
    .fitExtent(
      [
        [20, 20],
        [width, height],
      ],
      geoData
    );

  // Geographic path generator based on the projection configured above.
  $: path = geoPath(projection);

  $: console.log(total_results);
</script>

{#each provinces as province}
  <button class="electionengine-year-button" class:selected={region === province} on:click={() => setData(province)}>
    {province}
  </button>
{/each}

{#if provincesMap}
  <div class="electionengine-svg-wrapper">
    <svg class="electionengine-map-svg" {width} {height}>
      <!-- Countries -->
      <g id="saMap">
        {#each provincesMap as province}
          <path
            d={path(province)}
            fill={color_scale(total_results.filter((d) => d.municipal === province.properties.Municipali)[0].range)}
            stroke="white"
            stroke-width="0.94"
          />
        {/each}
      </g>
    </svg>
  </div>
{/if}

<style>
  button.selected {
    background-color: #4caf50;
    color: white;
  }
</style>
