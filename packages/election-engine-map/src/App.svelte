<script>
  // @ts-nocheck

  import { votes2009Data, votes2014Data, votes2019Data, votes2024Data } from "./lib/libs/loadData.js";
  import { onMount } from "svelte";
  import NationalView from "./lib/components/dashboard-view/nationalView.svelte";
  import ProvincialView from "./lib/components/dashboard-view/provincialView.svelte";

  // Parameters
  export let selected_year = 2019; // 2024, 2019, 2014
	export let selected_election = 'National Assembly'; // National Assembly, Provincial Legislature
	export let selected_region = 'National'; // National, Gauteng, Western Cape, etc.

  let data;

  async function loadData() {
    switch (selected_year) {
      case 2009:
        data = await votes2009Data();
        break;
      case 2014:
        data = await votes2014Data();
        break;
      case 2019:
        data = await votes2019Data();
        break;
      case 2024:
        data = await votes2024Data();
        break;
      default:
        data = await votes2024Data();
    }
    data = data;
    console.log(data);
  }
  
  onMount(async () => {
    loadData();
  })

  async function setYear(year) {
    if (year === selected_year) return;
    selected_year = year;
    await loadData();
  }

  async function setElection(election) {
    if (election === selected_election) return;
    selected_election = election;
    await loadData();
  }

  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="map-section">
  <div class="select-wrapper">
    <div class="select-button-wrapper">
      <div class="region">
        <button class:selected={selected_election === "National Assembly"} on:click={() => setElection("National Assembly")}>
          National Assembly</button
        >
        <button class:selected={selected_election === "Provincial Legislature"} on:click={() => setElection("Provincial Legislature")}>
          Provincial Legislature
        </button>
      </div>
    </div>
    <div class="select-button-wrapper">
      <div class="election-year">
        <button class:selected={selected_year === 2009} on:click={() => setYear(2009)}> 2009</button>
        <button class:selected={selected_year === 2014} on:click={() => setYear(2014)}> 2014</button>
        <button class:selected={selected_year === 2019} on:click={() => setYear(2019)}> 2019 </button>
        <button class:selected={selected_year === 2024} on:click={() => setYear(2024)}> 2024</button>
      </div>
    </div>
  </div>
  {#if selected_election === "National Assembly"}
    <NationalView bind:data={data} {innerWidth} />
  {:else if selected_election === "Provincial Legislature"}
    <ProvincialView bind:data={data} {innerWidth} {selected_region} />
  {/if}
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
