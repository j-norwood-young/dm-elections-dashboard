<script>
  // @ts-nocheck

  import { loadData } from "@election-engine/common/loadData.js";
  import { onMount } from "svelte";

  import NationalView from "./lib/components/dashboard-view/nationalView.svelte";
  import ProvincialView from "./lib/components/dashboard-view/provincialView.svelte";
  import years from "@election-engine/common/years.json";

  // Parameters
  export let selected_year = 2019; // 2024, 2019, 2014
  export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
  export let selected_region = "National"; // National, Gauteng, Western Cape, etc.

  let data;
  let province_seats = {};

  onMount(async () => {
    data = await getData(selected_year);
    // console.log(data)
  });

  async function setYear(year) {
    if (year === selected_year) return;
    selected_year = year;
    data = await getData(selected_year);
  }

  async function setElection(election) {
    if (election === selected_election) return;
    selected_election = election;
    data = await getData(selected_year);
  }

  async function getData(year) {
    const results = await loadData({
      year,
    });

    return results;
  }

  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="map-section">
  <div class="select-wrapper">
    <div class="select-button-wrapper">
      <div class="region">
        <button
          class:selected={selected_election === "National Assembly"}
          on:click={() => setElection("National Assembly")}
        >
          National Assembly</button
        >
        <button
          class:selected={selected_election === "Provincial Legislature"}
          on:click={() => setElection("Provincial Legislature")}
        >
          Provincial Legislature
        </button>
      </div>
    </div>
    <div class="select-button-wrapper">
      <div class="election-year">
        {#each years as year}
          <button class:selected={selected_year === year} on:click={() => setYear(year)}> {year}</button>
        {/each}
      </div>
    </div>
  </div>
  {#if selected_election === "National Assembly"}
    <NationalView bind:data {innerWidth} />
  {:else if selected_election === "Provincial Legislature"}
    <ProvincialView bind:data {innerWidth} {selected_region} />
  {/if}
  <!-- {#if province_seats["Gauteng"]}
    <svg width="140px" height="100">
      <Hexagons seats={province_seats["Gauteng"]} total_seats={48} />
    </svg>
  {/if} -->
</div>

<style>
  .map-section {
    padding: 1rem 1rem;
  }
  .select-wrapper {
    position: relative;
    z-index: 3;
  }

  .select-button-wrapper {
    margin: 0 auto;
  }

  .select-button-wrapper .region,
  .select-button-wrapper .election-year {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .election-year button {
    border: none;
    border-bottom: 4px solid silver;
    width: 75px;
  }

  .election-year button:hover {
    outline: 4px auto black;
    border-bottom: 4px solid black;
    transition: border-color 0.3s;
  }

  button.selected {
    background-color: #0c0c0c;
    color: #fff;
    border-bottom: 4px solid black;
  }
</style>
