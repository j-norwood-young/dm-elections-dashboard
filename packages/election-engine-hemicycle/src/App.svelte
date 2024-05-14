<script lang="ts">
  import Hemicycle from "svelte-hemicycle";

  import "./app.css";

  import { partyColor } from "@election-engine/common/colors.js";
  import YEARS from "@election-engine/common/years.json";
  import PROVINCES from "@election-engine/common/provinces.json";

  import ResultsHeader from "$lib/components/results-header/results-header.svelte";

  export let selected_year = 2024; // 2024, 2019, 2014
  export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
  export let selected_region = "National"; // National, Gauteng, Western Cape, etc.

  import { onMount } from "svelte";
  import {
    type CurrentScreenSize,
    currentScreenSize,
    ResultsHeaderStore,
  } from "$components/results-header";

  import {
    seats2014Data,
    seats2009Data,
    seats2019Data,
    seats2024Data,
  } from "$lib/load-data";

  let current_party: { count: any };
  let defaultData, mappedDefaultData;
  let currentScreen: CurrentScreenSize;
  let heading = "";

  const DEFAULT_COLOR_SCHEME = "high";

  const rows = 12;
  const display = ["points", "text"];
  const color = "black";
  const font_size = "20";
  const selectedShape = "hexagon";

  let data,
    total_seats,
    selectedScheme,
    arc,
    className,
    hcWidth,
    hcHeight,
    seats,
    modified;

  onMount(async () => {
    defaultData = await seats2014Data();
    mappedDefaultData = defaultData.map((party, id) => {
      return {
        id: id,
        text: party.Abbreviation,
        count: party.Seats,
      };
    });
    defaultData = manipulateHemicycle(mappedDefaultData);

    data = defaultData;
    total_seats = 400;
    heading = "2014";
  });

  $: {
    ResultsHeaderStore.subscribe((val) => {
      currentScreen = val;
    });
    if (currentScreen.small.query) {
      let { arc, className, hcWidth, hcHeight } = currentScreen;
    }
    if (currentScreen.medium.query) {
      arc = 300;
      hcWidth = 220;
      hcHeight = 220;
    }
    if (currentScreen.bigger.query) {
      arc = 270;
      hcWidth = 420;
      hcHeight = 420;
    }
    if (currentScreen.rest.query) {
      arc = 180;
      hcWidth = 620;
      hcHeight = 620;
    }
  }

  const loadData = async (year) => {
    seats = null;
    modified = null;

    heading = title;
    total_seats = seats;
    data = modified;
    current_party = current_party;
  };
</script>

<div class="election-engine-hemicycle-app">
  <main class="election-engine-hemicycle-app-main">
    <section class="election-engine-hemicycle-section">
      <h1>National Elections</h1>
      <h2>Hemicycle</h2>
      <ResultsHeader>
        <h3>Results Breakdown</h3>
      </ResultsHeader>
      <div id="hemicycle">
        <Hemicycle
          bind:current_party
          {hcWidth}
          {hcHeight}
          {data}
          {rows}
          {display}
          {color}
          {font_size}
          {selectedShape}
          {arc}
          {total_seats}
        />
      </div>
      {#if current_party}
        <div class="partyResultsInformation">
          <p>Total Seats Count: {current_party?.count}</p>
        </div>
      {/if}
    </section>
  </main>
</div>

<style>
  .election-engine-hemicycle-main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .election-engine-hemicycle-app h1,
  .election-engine-hemicycle-app h2,
  .election-engine-hemicycle-app p {
    color: var(--color-bg-3x);
    text-transform: uppercase;
    font-weight: 400;
  }

  .election-engine-hemicycle-app p {
    line-height: 1.5;
  }

  .election-engine-hemicycle-app a {
    color: var(--color-theme-1);
    text-decoration: none;
  }

  .election-engine-hemicycle-app a:hover {
    text-decoration: underline;
  }

  .election-engine-hemicycle-app h1 {
    font-size: 2rem;
    text-align: center;
  }

  .election-engine-hemicycle-app h2 {
    font-size: 1.5rem;
  }

  .election-engine-hemicycle-app pre {
    font-size: 16px;
    font-family: var(--font-mono);
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 3px;
    box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
    padding: 0.5em;
    overflow-x: auto;
    color: var(--color-text);
  }

  .election-engine-hemicycle-app .text-column {
    display: flex;
    max-width: 48rem;
    flex: 0.6;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  .election-engine-hemicycle-app input,
  .election-engine-hemicycle-app button {
    font-size: inherit;
    font-family: inherit;
  }

  .election-engine-hemicycle-app button:focus:not(:focus-visible) {
    outline: none;
  }

  @media (min-width: 720px) {
    .election-engine-hemicycle-app h1 {
      font-size: 2.4rem;
    }
  }

  .election-engine-hemicycle-app .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  .election-engine-hemicycle-app .small > main > svg {
    min-width: 100%;
    max-width: 80%;
  }

  .election-engine-hemicycle-app section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.4;
  }

  .election-engine-hemicycle-app main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .election-engine-hemicycle-app footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  #hemicycle {
    height: 400px;
  }
  .partyResultsInformation {
    position: absolute;
    top: calc((100vh / 2) + 80px);
  }
  h1 {
    width: 100%;
  }

  @media (min-width: 480px) {
    .election-engine-hemicycle-app footer {
      padding: 12px 0;
    }
  }
</style>
