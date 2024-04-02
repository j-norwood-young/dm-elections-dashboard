<script lang="ts">
  import * as d3 from "d3";
  import { scaleOrdinal } from "d3-scale";
  import { geoIdentity, geoPath } from "d3-geo";
  import geodata from "../data/sa-province.json";
  import type {
    Feature,
    FeatureCollection,
    GeoJsonProperties,
    Polygon,
  } from "geojson";

  /**
   *  set map dimension height and width
   *  width and height are expected to dynamic
   */
  let width: number = 600;
  let height: number = 600;

  let data: FeatureCollection = geodata;
  let provinces: Feature[] = data.features;

  // button select options to change map view btwn a cartogram and choropleth map
  let selectCartogram: "cartogram" | "map" = "cartogram";

  // dynamic variable set to change the size of each provices cartogram data
  let rectSize = 60;

  // colour encodings for each party
  let partyColours = {
    ANC: "#073B4C",
    DA: "#118AB2",
    IFP: "#06D6A0",
    EFF: "#FF8800",
    IND: "#EF476F",
  };

  /**
   * mapping function with party names as domain and HEX colours as the range
   * returns a mapping function
   */
  const colorScale = scaleOrdinal(
    Object.keys(partyColours),
    Object.values(partyColours)
  );

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
      data
    );

  // Geographic path generator based on the projection configured above.
  const path = geoPath(projection);

  const Poly2Center = function (d: Feature) {
    if (d.geometry.type == "MultiPolygon") {
      let best: Polygon = {} as Polygon;
      let bestArea = 0;
      d.geometry.coordinates.forEach(function (coords) {
        let poly: Polygon = { type: "Polygon", coordinates: coords };
        let area = d3.geoArea(poly);
        if (area > bestArea) {
          bestArea = area;
          best = poly;
        }
      });
      return path.centroid(best);
    } else {
      return path.centroid(d);
    }
  };

  $: size = d3.scaleSqrt(
    [
      0,
      d3.max(
        data.features,
        (d: GeoJsonProperties) => d?.properties.Reg_Voters
      ),
    ],
    [0, rectSize * 1.77]
  );

  $: data2 = provinces
    .map((d: Feature) => {
      const id = d.properties?.CODE;
      const voters = d.properties?.Reg_Voters;
      const majorParty = d.properties?.Major_Party;
      const height = size(d.properties?.Reg_Voters);
      const width = size(d.properties?.Reg_Voters);
      const coords = Poly2Center(d);
      return {
        id,
        voters,
        majorParty,
        height,
        width,
        x: coords[0],
        y: coords[1],
      };
    })
    .filter((d) => d.voters != null);
</script>

<div id="main">
  <div class="select-container">
    <button on:click={() => (selectCartogram = "cartogram")}>
      Cartogram
    </button>
    <button on:click={() => (selectCartogram = "map")}> Map </button>
  </div>
  <div class="control">
    <p>Size</p>
    <input type="range" min="10" max="150" bind:value={rectSize} />
  </div>
  <svg {width} {height}>
    <!-- Countries -->
    <g id="saMap">
      {#each provinces as province}
        <path
          d={path(province)}
          fill={selectCartogram === "cartogram"
            ? "transparent"
            : colorScale(province.properties?.Major_Party)}
          stroke={selectCartogram === "cartogram"
            ? "#f6f6f6"
            : "#737270"}
        />
        <text
          class="text"
          dx="-5"
          x={path.centroid(province)[0] - 25}
          y={path.centroid(province)[1] + 10}
          fill="#fcfcfc"
        >
          {province.properties?.PROVINCE}</text
        >
      {/each}
    </g>

    {#if selectCartogram === "cartogram"}
      {#each data2 as node}
        <rect
          width={node.width}
          height={node.height}
          x={node.x - node.width / 2}
          y={node.y - node.height / 2}
          fill={colorScale(node.majorParty)}
          stroke="#fff"
        />
        <text
          class="text"
          x={node.x}
          y={node.y}
          fill="#fcfcfc"
          alignment-baseline="central"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          {node.id}</text
        >
      {/each}
    {/if}
  </svg>
</div>

<style>
  text {
    font-family: "Helvetica";
    font-size: 12px;
  }
</style>
