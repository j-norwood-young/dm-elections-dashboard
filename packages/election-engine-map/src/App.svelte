<script>
    // @ts-nocheck

    import { loadData } from "@election-engine/common/loadData.js";
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    import NationalView from "./lib/components/dashboard-view/nationalView.svelte";
    import ProvincialView from "./lib/components/dashboard-view/provincialView.svelte";
    import years from "@election-engine/common/years.json";
    import PROVINCES from "@election-engine/common/provinces.json";
    import SelectButton from "./lib/components/selectButton.svelte";
    import Loading from "@election-engine/common/loading.svelte";
    import { maps_endpoint } from "./lib/libs/maps";
    import { partyColor } from "@election-engine/common/colors";

    // Parameters
    export let selected_year = 2024; // 2024, 2019, 2014
    export let selected_election = "Provincial Legislature"; // National Assembly, Provincial Legislature
    export let selected_region = "Western Cape"; // National, Gauteng, Western Cape, etc.
    export let show_buttons = false;

    const provinces = PROVINCES.filter(
        (p) => !["National", "Out of Country"].includes(p)
    );
    let loading = false;
    let isExpanded = false;

    let data;
    let provincial_map;
    let national_map;

    onMount(async () => {
        data = await getData(selected_year);
        national_map = await getNationalMap();
        if (selected_election === "Provincial Legislature") {
            provincial_map = await getProvincialMap();
        }
    });

    async function setYear(year) {
        if (year === selected_year) return;
        selected_year = year;
        data = await getData(selected_year);
        if (selected_election === "Provincial Legislature") {
            provincial_map = await getProvincialMap();
        }
    }

    async function setElection(election) {
        if (election === selected_election) return;
        data = null;
        selected_election = election;
        if (election === "Provincial Legislature") {
            if (selected_region === "National") {
                selected_region = "Gauteng";
            }
        }
        data = await getData(selected_year, selected_election, selected_region);
        if (selected_election === "Provincial Legislature") {
            provincial_map = await getProvincialMap();
        }
    }

    async function setRegion(region) {
        if (region === selected_region) return;
        selected_region = region;
        data = await getData(selected_year, selected_election, selected_region);
        provincial_map = await getProvincialMap();
    }

    async function getData() {
        loading = true;
        try {
            if (selected_election === "National Assembly") {
                const national_seats_result = await loadData({
                    year: selected_year,
                    region: selected_region,
                });
                // Assign colours to parties
                let i = 0;
                for (let province of national_seats_result.provincial_results) {
                    for (let party of province.party_ballot_results) {
                        party.party_color = partyColor(
                            party.party_abbreviation,
                            i++
                        );
                    }
                }
                return national_seats_result.provincial_results;
            }

            if (selected_region !== "National") {
                const provincial_seats_result = await loadData({
                    year: selected_year,
                    election: selected_election,
                    region: selected_region,
                });
                // Assign colours to parties
                let i = 0;
                for (let municipality of provincial_seats_result.municipal_results) {
                    for (let party of municipality.party_ballot_results) {
                        party.party_color = partyColor(
                            party.party_abbreviation,
                            i++
                        );
                    }
                }
                return provincial_seats_result.municipal_results;
            }
        } catch (error) {
            console.error(error);
        } finally {
            loading = false;
        }
    }

    async function getNationalMap() {
        loading = true;
        try {
            const national_map = await fetch(
                "https://iec-api.revengine.dailymaverick.co.za/maps/sa-province.smallest.min.json"
            );
            return national_map.json();
        } catch (error) {
            console.error(error);
        } finally {
            loading = false;
        }
    }

    async function getProvincialMap() {
        loading = true;
        try {
            const province_map_code = maps_endpoint.filter(
                (d) => d.region === selected_region
            )[0].endpoint;
            const url = `https://iec-api.revengine.dailymaverick.co.za/maps/${selected_year}/sa-munic-${province_map_code}.geojson.min.json`;
            const d = await fetch(url);
            return d.json();
        } catch (error) {
            console.error(error);
        } finally {
            loading = false;
        }
    }

    function changeExpandable() {
        isExpanded = !isExpanded;
    }

    // window width definition
    let innerWidth = 0;

    $: isMediaScreenSmall = innerWidth < 630 ? true : false;
</script>

<svelte:window bind:innerWidth />

<div class="electionengine-maps">
    <Loading bind:loading />
    {#if show_buttons}
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
                    class:selected={selected_election ===
                        "Provincial Legislature"}
                    on:click={() => setElection("Provincial Legislature")}
                >
                    Provincial Legislature
                </button>
            </div>
        </SelectButton>

        <SelectButton>
            <div class="electionengine-selectbutton-wrapper">
                {#each years as year}
                    <button
                        class:selected={selected_year === year}
                        on:click={() => setYear(year)}
                    >
                        {year}</button
                    >
                {/each}
            </div>
        </SelectButton>

        {#if isMediaScreenSmall}
            <div
                class="electionengine-selectdropdown-wrapper electionengine-dropdown-form"
            >
                <button
                    class="electionengine-dropdown-select"
                    class:electionengine-provincial-dropdown={isExpanded}
                    on:click={changeExpandable}>{selected_region}</button
                >
                {#if isExpanded}
                    <div
                        transition:slide
                        class="electionengine-selectbutton-dropdown-wrapper"
                    >
                        {#each provinces as province}
                            <button
                                class="electionengine-year-button electionengine-dropdown-button"
                                class:selected={selected_region === province}
                                on:click={() => {
                                    setRegion(province);
                                    isExpanded = !isExpanded;
                                }}
                            >
                                {province}
                            </button>
                        {/each}
                    </div>
                {/if}
            </div>
        {:else}
            <div class="electionengine-selectbutton-wrapper">
                {#each provinces as province}
                    <button
                        class="electionengine-year-button"
                        class:selected={selected_region === province}
                        on:click={() => setRegion(province)}
                    >
                        {province}
                    </button>
                {/each}
            </div>
        {/if}
    {/if}
    {#if data}
        {#if selected_election === "National Assembly" && national_map}
            <NationalView
                bind:map={national_map}
                bind:data
                bind:selected_year
            />
        {:else if selected_election === "Provincial Legislature" && provincial_map}
            <ProvincialView
                bind:provincial_map
                bind:national_map
                bind:data
                bind:selected_region
            />
        {/if}
    {/if}
</div>

<style>
    .electionengine-maps {
        position: relative;
        min-height: 320px;
        width: 100%;
    }

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

    .electionengine-selectbutton-dropdown-wrapper {
        margin-top: 0.3rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid #cbcbcb;
        position: absolute;
        z-index: 9999;
        width: 100%;
    }

    .electionengine-selectbutton-dropdown-wrapper
        .electionengine-dropdown-button {
        width: 100%;
        display: block;
        color: #cbcbcb;
        background-color: transparent;
        border-radius: 0;
        border: none;
        margin: 0;
    }

    .electionengine-selectbutton-dropdown-wrapper
        .electionengine-dropdown-button:hover {
        background: #f1fff1;
    }

    .electionengine-selectbutton-wrapper .electionengine-year-button.selected,
    .electionengine-selectbutton-dropdown-wrapper
        .electionengine-dropdown-button.selected,
    .electionengine-selectbutton-dropdown-wrapper
        .electionengine-dropdown-button:active {
        background-color: #4caf50;
        color: white;
    }

    .electionengine-dropdown-form {
        position: relative;
        width: 300px;
    }

    .electionengine-dropdown-select:hover,
    .electionengine-dropdown-select:focus {
        outline: 1px solid limegreen;
        cursor: pointer;
    }

    .electionengine-dropdown-select {
        position: relative;
        width: 100%;
        padding: 10px 24px;
        border-radius: 6px;
        border: 1px solid #cbcbcb;
        color: #cbcbcb;
        margin: 0;
    }

    .electionengine-year-button {
        border: 0;
        background-color: white;
        border-radius: 0px;
        border-bottom: 2px solid #cbcbcb;
    }

    @media (width < 420px) {
        .electionengine-selectbutton-wrapper {
            font-size: 11px;
            border: 0.76px solid #cbcbcb;
            border-radius: 6.85px;
        }
    }
</style>
