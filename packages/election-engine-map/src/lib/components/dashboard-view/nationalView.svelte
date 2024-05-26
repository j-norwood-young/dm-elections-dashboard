<script>
  // @ts-nocheck
  import { geoIdentity, geoPath } from "d3-geo";
  import { onMount } from "svelte";
  import Legend from "../legend.svelte";
  import Hexagons from "../result-view/hexagons.svelte";
  import Tooltip from "../tooltip.svelte";
  import SEATS from "@election-engine/common/seat_counts.json";

  export let data;
  export let selected_year;
  export let map;

  let width = 800;
  let height = 800;
  let provinces;
  let tooltipData;

  onMount(async () => {
    attach_data_to_map();
  });

  function position_hexagons(province) {
    const center = path.centroid(province);
    const top = center[1] - 20;
    const left = center[0] - 40;
    return `translate(${left}, ${top})`;
  }

  function attach_data_to_map() {
    if (!data || !map) {
      console.log("Data or map not available");
      return;
    };
    provinces = map.features;
    for (let province of provinces) {
      const province_data = data.find((d) => d.province_name === province.properties.PROVINCE);
      const total_seats = SEATS["national"][selected_year][province.properties.PROVINCE];
      if (province_data) {
        province.properties = {
          ...province.properties,
          ...province_data,
          total_seats,
        };
      }
    }
  }

  function filterPartiesWithSeats(data) {
    return data.filter(party => party.seats > 0);
}

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
      map
    );

  // Geographic path generator based on the projection configured above.
  $: path = geoPath(projection);

  $: attach_data_to_map();
</script>

<div class="electionengine-national-map">
  <div class="electionengine-title">
    National Assembly seats by province for {selected_year}
  </div>

  {#if data}
    <Legend bind:data />
  {/if}

  {#if data && provinces}
    {#if tooltipData}
      <Tooltip bind:tooltipData grid={false} />
    {/if}
    <div class="electionengine-svg-wrapper">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <svg class="electionengine-map-svg" viewBox="0 0 800 800" width="100%" on:mouseleave={() => tooltipData = null} >
        <!-- Countries -->
        <g id="saMap">
          {#each provinces as province}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <g class="province" >
              <path d={path(province)} fill="#ECECEC" stroke="white" stroke-width="0.94" />
            </g>
          {/each}
          {#each provinces as province}
            {#if province.properties.PROVINCE === "Gauteng"}
              <!-- svelte-ignore a11y-mouse-events-have-key-events -->
              <g
                on:mouseover={(e) => {
                      tooltipData = {}
                      tooltipData["province"] = province.properties.PROVINCE;
                      tooltipData["registered_voters"] = province.properties.registered_voters;
                      tooltipData["total_valid_votes"] = province.properties.total_valid_votes;
                      tooltipData["party"] = filterPartiesWithSeats(province.properties.party_ballot_results) ;
                      tooltipData["x"] = e.clientX;
                      tooltipData["y"] = e.clientY;
                                }} 
               transform="translate({[350, 150]})">
                <text x="0" y="0" font-size="1.2rem" font-weight="bold" fill="black" text-anchor="left">
                  {province.properties.PROVINCE}
                </text>
                <g transform="translate(0, 8)">
                  <Hexagons
                    bind:seats={province.properties.party_ballot_results}
                    bind:total_seats={province.properties.total_seats}
                    bind:hexagon_data={province.properties}
                  />
                </g>
                <!-- Draw a line to Gauteng -->
                <line
                  x1="140"
                  y1="5"
                  x2={path.centroid(province)[0] - 350}
                  y2={path.centroid(province)[1] - 150}
                  stroke="black"
                  stroke-width="2"
                />
                <line x1="0" y1="5" x2="140" y2="5" stroke="black" stroke-width="2" />
                <circle cx={path.centroid(province)[0] - 350} cy={path.centroid(province)[1] - 150} r="5" fill="black" />
              </g>
            {:else}
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <!-- svelte-ignore a11y-mouse-events-have-key-events -->
              <g>
                <g 
                  on:mouseover={(e) => {
                      tooltipData = {}
                      tooltipData["province"] = province.properties.PROVINCE;
                      tooltipData["registered_voters"] = province.properties.registered_voters;
                      tooltipData["total_valid_votes"] = province.properties.total_valid_votes;
                      tooltipData["party"] = filterPartiesWithSeats(province.properties.party_ballot_results) ;
                      tooltipData["x"] = e.clientX;
                      tooltipData["y"] = e.clientY;
                                }} 
                  transform={position_hexagons(province)}>
                  <text x="0" y="0" font-size="1.2rem" font-weight="bold" fill="black" text-anchor="left">
                    {province.properties.PROVINCE}
                  </text>
                  <g transform="translate(0, 8)">
                    <Hexagons
                      bind:seats={province.properties.party_ballot_results}
                      bind:total_seats={province.properties.total_seats}
                      bind:hexagon_data={province.properties}
                      bind:tooltipData
                    />
                  </g>
                  </g>
              </g>
              
            {/if}
          {/each}
        </g>
      </svg>
    </div>
  {/if}
</div>

<style>
  .electionengine-national-map {
    position: relative;
    min-height: 400px;
  }

  .electionengine-svg-wrapper {
    width: 100%;
  }

  .electionengine-title {
    font-size: 20px;
    font-weight: 700;
    margin: 20px auto;
    line-height: 1.2;
    text-align: center;
  }
</style>
