<script>
    // @ts-nocheck

    import {
        loadData,
        ok_to_update,
    } from "@election-engine/common/loadData.js";
    import { onMount, onDestroy } from "svelte";

    import NationalView from "./lib/components/dashboard-view/nationalView.svelte";
    import ProvincialView from "./lib/components/dashboard-view/provincialView.svelte";
    import years from "@election-engine/common/years.json";
    import PROVINCES from "@election-engine/common/provinces.json";
    import Loading from "@election-engine/common/loading.svelte";
    import { maps_endpoint } from "./lib/libs/maps";
    import { partyColor } from "@election-engine/common/colors";
    import SEAT_COUNTS from "@election-engine/common/seat_counts.json";

    // Parameters
    export let selected_year = 2014; // 2024, 2019, 2014
    export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
    export let selected_region = "Western Cape"; // National, Gauteng, Western Cape, etc.
    export let show_buttons = false;
    export let show_title = true;
    export let show_blurb = true;

    const provinces = PROVINCES.filter(
        (p) => !["National", "Out of Country"].includes(p)
    );
    const current_year = new Date().getFullYear();
    let loading = false;

    let data;
    let provincial_map;
    let national_map;
    let interval;
    let timeout;
    let container_el;
    let warning = false;

    onMount(async () => {
        data = await getData();
        national_map = await getNationalMap();
        if (selected_election === "Provincial Legislature") {
            provincial_map = await getProvincialMap();
        }
        interval = setInterval(async () => {
            if (
                selected_year === current_year &&
                !loading &&
                ok_to_update(container_el)
            ) {
                data = await getData();
            }
        }, 300000); // 5 minutes
    });

    onDestroy(() => {
        clearInterval(interval);
        clearTimeout(timeout);
    });

    async function setYear(year) {
        if (year === selected_year) return;
        selected_year = year;
        data = null;
        data = await getData();
        if (selected_election === "Provincial Legislature") {
            provincial_map = await getProvincialMap();
        }
    }

    async function setElection(election) {
        if (election === selected_election) return;
        data = null;
        selected_election = election;
        if (selected_election === "Provincial Legislature") {
            if (selected_region === "National") {
                selected_region = "Gauteng";
            }
        }
        data = await getData();
        if (selected_election === "Provincial Legislature") {
            provincial_map = await getProvincialMap();
        }
    }

    async function setRegion(region) {
        if (region === selected_region) return;
        selected_region = region;
        data = await getData();
        provincial_map = await getProvincialMap();
    }

    async function getData() {
        loading = true;
        warning = false;
        clearTimeout(timeout);
        let party_colors = {};
        try {
            timeout = setTimeout(() => {
                if (loading) {
                    loading = false;
                    warning = true;
                    console.error("Data loading timeout");
                }
            }, 30000);
            if (selected_election === "National Assembly") {
                const national_seats_result = await loadData({
                    year: selected_year,
                    region: selected_region,
                });
                // Assign colours to parties
                let i = 0;
                for (let province of national_seats_result.provincial_results) {
                    for (let party of province.party_ballot_results) {
                        if (!party_colors[party.party_abbreviation]) {
                            party.party_color = partyColor(
                                party.party_abbreviation,
                                i++
                            );
                            party_colors[party.party_abbreviation] =
                                party.party_color;
                        } else {
                            party.party_color =
                                party_colors[party.party_abbreviation];
                        }
                    }
                }
                return national_seats_result.provincial_results;
            } else {
                const provincial_seats_result = await loadData({
                    year: selected_year,
                    election: selected_election,
                    region: selected_region,
                });
                // Assign colours to parties
                let i = 0;
                for (let municipality of provincial_seats_result.municipal_results) {
                    for (let party of municipality.party_ballot_results) {
                        if (!party_colors[party.party_abbreviation]) {
                            party.party_color = partyColor(
                                party.party_abbreviation,
                                i++
                            );
                            party_colors[party.party_abbreviation] =
                                party.party_color;
                        } else {
                            party.party_color =
                                party_colors[party.party_abbreviation];
                        }
                    }
                }
                return provincial_seats_result.municipal_results;
            }
        } catch (error) {
            console.error(error);
            warning = true;
        } finally {
            loading = false;
            clearTimeout(timeout);
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
</script>

<div class="electionengine-maps" bind:this={container_el}>
    <Loading bind:loading />
    {#if show_buttons}
        <div class="electionengine-buttons">
            <button
                class="electionengine-year-button"
                class:active={selected_election === "National Assembly"}
                on:click={() => setElection("National Assembly")}
            >
                National Assembly</button
            >
            <button
                class="electionengine-year-button"
                class:active={selected_election === "Provincial Legislature"}
                on:click={() => setElection("Provincial Legislature")}
            >
                Provincial Legislature
            </button>
        </div>

        <div class="electionengine-buttons">
            {#each years as year}
                <button
                    class="electionengine-year-button"
                    class:active={selected_year === year}
                    on:click={() => setYear(year)}
                >
                    {year}</button
                >
            {/each}
        </div>
        {#if selected_election === "Provincial Legislature"}
            <div class="electionengine-buttons">
                {#each provinces as province}
                    <button
                        class="electionengine-year-button"
                        class:active={selected_region === province}
                        on:click={() => setRegion(province)}
                    >
                        {province}
                    </button>
                {/each}
            </div>
        {/if}
    {/if}
    {#if warning}
        <div class="electionengine-blurb">
            <p>There was an error loading the data. Please try again later.</p>
        </div>
    {/if}
    {#if data}
        {#if selected_election === "National Assembly" && national_map}
            {#if show_title}
                <h4 class="electionengine-title">
                    {selected_year} National Assembly seats (200) from the regional
                    ballot
                </h4>
            {/if}
            <NationalView
                bind:map={national_map}
                bind:data
                bind:selected_year
            />
            {#if show_blurb}
                <div class="electionengine-blurb">
                    <p>
                        The National Assembly is composed of 400 members, 200 of
                        whom are elected by regional votes per province, shown
                        above. The remaining 200 are elected by national ballot.
                    </p>
                </div>
            {/if}
        {:else if selected_election === "Provincial Legislature" && provincial_map}
            {#if show_title}
                <h4 class="electionengine-title">
                    {selected_year} Provincial Legislature results for {selected_region}
                </h4>
            {/if}
            <ProvincialView
                bind:provincial_map
                bind:national_map
                bind:data
                bind:selected_region
            />
            {#if show_blurb}
                <div class="electionengine-blurb">
                    <p>
                        In {selected_year}, {selected_region} has
                        {SEAT_COUNTS.provincial[selected_year][selected_region]}
                        Provincial Legislature seats. The map above shows the municipal
                        results for the
                        {selected_region} province, with a darker colour representing
                        more control for the winning party in each municipality.
                        Winning a municipality does not guarantee a seat, as the
                        seats are allocated based on the total proportion of votes
                        received.
                    </p>
                </div>
            {/if}
        {/if}
    {/if}
</div>

<style>
    .electionengine-maps {
        position: relative;
        min-height: 320px;
        width: 100%;
    }

    .electionengine-year-button {
        background-color: #e4e4e4;
        border: 1px solid #ccc;
        color: black;
        padding: 10px 24px;
        cursor: pointer;
        border-radius: 5px;
        margin: 5px;
    }

    .electionengine-year-button.active {
        background-color: #4caf50;
        color: white;
    }

    h4 {
        text-align: center;
    }

    .electionengine-blurb {
        font-size: 12px;
        color: #2a2a2a;
        font-weight: normal;
        border-bottom: 1px solid #c7c4c4;
        border-top: 1px solid #c7c4c4;
        padding: 10px;
        margin: 0px auto 20px auto;
        max-width: 400px;
    }
</style>
