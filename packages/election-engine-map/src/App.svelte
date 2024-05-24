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

  async function getData() {
    console.log(selected_year, selected_election, selected_region);

    if (selected_election === "National Assembly") {
      const national_seats_result = await loadData({
        year: selected_year,
        region: selected_region,
      });
      return national_seats_result.provincial_results;
    }

    if (selected_region !== "National") {
      const provincial_seats_result = await loadData({
        year: selected_year,
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
    <!-- svelte-ignore missing-declaration -->
    <SelectButton>
      <div class="electionengine-selectbutton-wrapper">
        <button
          class:selected={selected_election === "National Assembly"}
          on:click={() => setElection("National Assembly")}
        >
          National Assembly</button
        >
        <div class="partition"></div>
        <button
          class:selected={selected_election === "Provincial Legislature"}
          on:click={() => setElection("Provincial Legislature")}
        >
          Provincial Legislature
        </button>
      </div>
    </SelectButton>

    <!-- svelte-ignore missing-declaration -->
    <SelectButton>
      <div class="electionengine-selectbutton-wrapper">
        {#each years as year}
          <button class:selected={selected_year === year} on:click={() => setYear(year)}> {year}</button>
        {/each}
      </div>
    </SelectButton>
  {/if}

  {#if loading}
    {#if selected_election === "National Assembly"}
      {#if data}
        <NationalView {data} {innerWidth} bind:selected_year />
      {/if}
    {:else if selected_election === "Provincial Legislature"}
      <ProvincialView {selected_year} bind:selected_region bind:provinces {data} bind:innerWidth />
    {/if}
  {:else}
    <div>...Loading</div>
  {/if}
</div>

<style>
  .electionengine-selectbutton-wrapper {
    display: flex;
    gap: 6px;
  }

  .electionengine-selectbutton-wrapper button {
    color: #cbcbcb;
    background-color: white;
    border: none;
  }

  .electionengine-selectbutton-wrapper button.selected {
    background-color: #4caf50;
    color: white;
  }

  .electionengine-selectbutton-wrapper .partition {
    display: inline;
    border: 1px solid #cbcbcb;
    width: 2px;
    background: #cbcbcb;
    margin: 8px 0;
  }

  @media (width < 420px) {
    .electionengine-selectbutton-wrapper {
      font-size: 11px;
      border: 0.76px solid #cbcbcb;
      border-radius: 6.85px;
    }
  }
</style>
