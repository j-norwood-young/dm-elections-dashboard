<script>
  // @ts-nocheck

  import { loadData } from "@election-engine/common/loadData.js";
  import { onMount } from "svelte";

  import NationalView from "./lib/components/dashboard-view/nationalView.svelte";
  import ProvincialView from "./lib/components/dashboard-view/provincialView.svelte";
  import years from "@election-engine/common/years.json";
  import PROVINCES from "@election-engine/common/provinces.json";

  // Parameters
  export let selected_year = 2019; // 2024, 2019, 2014
  export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
  export let selected_region = "National"; // National, Gauteng, Western Cape, etc.
  export let show_buttons = false;

  let provinces = PROVINCES;
  let loading = false;

  let data;

  onMount(async () => {
    data = await getData(selected_year);
    loading = true;
  });

  async function setYear(year) {
    if (year === selected_year) return;
    selected_year = year;
    data = await getData(selected_year);
  }

  async function setElection(election) {
    if (election === selected_election) return;
    selected_election = election;
    if (election === "Provincial Legislature") {
      provinces = PROVINCES.filter((p) => !["National", "Out of Country"].includes(p));
    } else {
      provinces = PROVINCES;
    }
    data = await getData(selected_year, selected_election, selected_region);
  }

  async function setRegion(region) {
    if (region === selected_region) return;
    selected_region = region;
    data = await getData(selected_year, selected_election, selected_region);
  }

  async function getData(year) {
    // console.log(year, selected_election, selected_region);
    if (selected_election === "National Assembly") {
      const national_seats_result = await loadData({
        year,
        selected_region,
      });

      return national_seats_result.provincial_results;
    }

    if (selected_region !== "National") {
      const provincial_seats_result = await loadData({
        year,
        election: selected_election,
        region: selected_region,
      });

      return provincial_seats_result.municipal_results;
    }
  }

  // window width definition
  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="electionengine-mapsection">
  {#if show_buttons}
    <div class="electionengine-selectbutton-wrapper">
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

    <div class="electionengine-selectbutton-wrapper">
      {#each years as year}
        <button class:selected={selected_year === year} on:click={() => setYear(year)}> {year}</button>
      {/each}
    </div>
  {/if}

  {#if loading}
    {#if selected_election === "National Assembly"}
      {#if data}
        <NationalView bind:data {innerWidth} />
      {/if}
    {:else if selected_election === "Provincial Legislature"}
      <ProvincialView bind:selected_year bind:selected_region bind:provinces bind:data />
    {/if}
  {:else}
    <div>...Loading</div>
  {/if}
</div>

<style>
  .electionengine-selectbutton-wrapper {
    margin-bottom: 0.5rem;
  }

  button.selected {
    background-color: #4caf50;
    color: white;
  }
</style>
