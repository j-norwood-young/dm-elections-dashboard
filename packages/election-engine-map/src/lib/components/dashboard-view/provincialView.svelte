<script>
  // @ts-nocheck
  import { onMount } from "svelte";

  import { geoIdentity, geoPath } from "d3-geo";
  import { scaleLinear } from "d3-scale";
  import { extent } from "d3-array";
  import { hsl, rgb } from "d3-color";

  import { loadData } from "@election-engine/common/loadData";
  import { maps_endpoint } from "../../libs/maps";
  import { partyColor } from "@election-engine/common/colors";

  export let selected_year = 2024;
  export let selected_region = "Eastern Cape";
  export let provinces;

  export let data;

  let selected_election = "Provincial Legislature";

  // API base url
  const base_url = "https://iec-api.revengine.dailymaverick.co.za";

  // short code for map url API endpoint - set to eastern cape
  let province_map_code = "ec";

  // map API url endpoint
  let map_url = `${base_url}/maps/${selected_year}/sa-munic-${province_map_code}.geojson.min.json`;

  // municipal geographical data;
  let geo_data;

  // municipal geographical features data;
  let provinces_geo_data;

  // map width and height dimension
  let width = 600;
  let height = 600;

  // array of parties with the highest votes in all municipalities from a province
  let provinces_array;
  let getTotalParty;
  let highParty = [];

  onMount(async () => {
    selected_region = "Eastern Cape";
    geo_data = await getMapData(map_url);
    provinces_geo_data = geo_data.features;
    data = await getData(selected_year, selected_region);

    getTotalParty = (data) => {
      const municipal = [];
      for (let item in data) {
        const municipal_name = { municipal_code: data[item].municipality_name.split(" ")[0] };
        const highestVotePercParty = data[item].party_ballot_results.reduce(
          (max, party) => (party.vote_perc > max.vote_perc ? party : max),
          data[item].party_ballot_results[0]
        );
        console.log(highestVotePercParty);
        municipal.push(Object.assign(highestVotePercParty, municipal_name));
      }

      highParty = municipal;

      const result = provinces_geo_data.map((feature) => {
        const matchingPartyResult = municipal.find((party) => party.municipal_code === feature.properties.MUNI_CODE);
        if (matchingPartyResult) {
          feature.properties.highest_party_result = matchingPartyResult;
        }
        return feature;
      });

      return result;
    };

    provinces_array = getTotalParty(data);
  });

  async function getMapData(url) {
    const d = await fetch(url);
    return d.json();
  }

  async function getData(year, selected_region) {
    // console.log(year, selected_election, selected_region);
    if (selected_region !== "National") {
      const provincial_seats_result = await loadData({
        year,
        election: selected_election,
        region: selected_region,
      });

      return provincial_seats_result.municipal_results;
    }
  }

  async function setData(province) {
    selected_region = province;
    data = await getData(selected_year, province);
    province_map_code = maps_endpoint.filter((d) => d.region === province)[0].endpoint;
    map_url = `${base_url}/maps/${selected_year}/sa-munic-${province_map_code}.geojson.min.json`;
    geo_data = await getMapData(map_url);
    provinces_geo_data = geo_data.features;
    provinces_array = getTotalParty(data);
  }

  $: color_scale = scaleLinear()
    .domain(extent(highParty, (d) => d.vote_perc))
    .range([40, 100]);

  $: colorFill = (municipal, index) => {
    const hex = partyColor(municipal.properties.highest_party_result.party_abbreviation, index);
    let { r, g, b } = rgb(hsl(hex));
    const opacity = color_scale(municipal.properties.highest_party_result.vote_perc) / 100;
    // console.log(light);
    return rgb(r, g, b, opacity);
  };

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

<div class="electionengine-button-wrapper">
  {#each provinces as province}
    <button
      class="electionengine-year-button"
      class:selected={selected_region === province}
      on:click={() => setData(province)}
    >
      {province}
    </button>
  {/each}
</div>

{#if provinces_array}
  <div class="electionengine-svg-wrapper">
    <svg class="electionengine-map-svg" {width} {height}>
      <!-- Municipalities Group -->
      <g id="saMap">
        {#each provinces_array as municipality, index}
          <path
            data-perc={municipality.properties.highest_party_result.vote_perc}
            d={path(municipality)}
            fill={colorFill(municipality, index)}
            stroke="white"
            stroke-width="0.94"
          />
        {/each}
      </g>
    </svg>
  </div>
{:else}
  <p>checking out</p>
{/if}

<style>
  button.selected {
    background-color: #4caf50;
    color: white;
  }
</style>
