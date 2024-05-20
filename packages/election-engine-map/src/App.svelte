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
  export let show_buttons = false;

  let election_results_data;

  onMount(async () => {
    election_results_data = await getData(selected_year);
  });

  async function setYear(year) {
    if (year === selected_year) return;
    selected_year = year;
    election_results_data = await getData(selected_year);
  }

  async function setElection(election) {
    if (election === selected_election) return;
    selected_election = election;
    // election_results_data = await getData(selected_year);
  }

  async function getData(year) {
    if (selected_election === "National Assembly") {
      const national_seats_results = await loadData({
        year,
        selected_election,
      });

      if (selected_region === "National") {
        return national_seats_results.provincial_results;
      }
    }
  }

  // window width definition
  let innerWidth = 0;

  // $: console.log(election_results_data);
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

  {#if selected_election === "National Assembly"}
    {#if election_results_data}
      <NationalView bind:election_results_data {innerWidth} />
    {/if}
  {:else if selected_election === "Provincial Legislature"}
    <ProvincialView year={selected_year} />
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
