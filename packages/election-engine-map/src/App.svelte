<script>
  import { votes2009Data, votes2014Data, votes2019Data, votes2024Data } from "./lib/libs/loadData.js";
  import { onMount } from "svelte";
  import NationalView from "./lib/components/dashboard-view/nationalView.svelte";
  import ProvincialView from "./lib/components/dashboard-view/provincialView.svelte";

  let data;
  let viewBox = "national";

  onMount(async () => {
    // const response = await fetch("https://iec-api.revengine.dailymaverick.co.za/results/votes/national/2019");

    // data = await response.json();

    data = await votes2019Data();
  });

  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="map-section">
  <div class="select-wrapper">
    <div class="select-button-wrapper">
      <div class="region">
        <button class:national={viewBox === "national"} on:click={() => (viewBox = "national")}>
          National Assembly</button
        >
        <button class:province={viewBox === "province"} on:click={() => (viewBox = "provincial")}>
          Provincial Legislature
        </button>
      </div>
    </div>
    <div class="select-button-wrapper">
      <div class="election-year">
        <button> 2009</button>
        <button> 2014</button>
        <button> 2019 </button>
        <button> 2024</button>
      </div>
    </div>
  </div>

  {#if viewBox === "national"}
    <NationalView {data} {innerWidth} />
  {:else if viewBox === "provincial"}
    <ProvincialView />
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

  .election-year button:focus,
  .election-year button:focus-visible {
    background-color: black;
    color: white;
    border-bottom: 4px solid black;
  }

  button.national,
  button.province {
    background-color: #0c0c0c;
    color: #fff;
  }
</style>
