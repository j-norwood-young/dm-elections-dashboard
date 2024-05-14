<script>
    import { onMount } from "svelte";
    import { loadData } from "@election-engine/map/src/lib/libs/loadData.js"; // Change to Common when we implement it
    import YEARS from "@election-engine/common/years.json";
    export let selected_year = 2019; // 2024, 2019, 2014
    export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
    export let selected_region = "National"; // National, Gauteng, Western Cape, etc.

    let data;

    onMount(async () => {
        data = await loadData(selected_year);
        console.log(data)
        // console.log(data)
    });

    async function setYear(year) {
        if (year === selected_year) return;
        selected_year = year;
        data = await loadData(selected_year);
    }

    async function setElection(election) {
        if (election === selected_election) return;
        selected_election = election;
        data = await loadData(selected_year);
    }
</script>

<div>
    <div class="electionengine-years-buttons">
        {#each YEARS as year}
            <button
                class="electionengine-year-button"
                on:click={() => setYear(year)}
                class:active={selected_year === year}
            >
                {year}
            </button>
        {/each}
    </div>
    <div class="electionengine-table-container">
        <table class="electionengine-table">
            <thead>
                <tr>
                    <th>Province</th>
                    <th>Party</th>
                    <th>Seats</th>
                </tr>
            </thead>
            <tbody>
                {#if data}
                    {#each data as row}
                        <tr>
                            <td>{row.Province}</td>
                            <td>{row.Party}</td>
                            <td>{row.Seats}</td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
</div>

<style>
    .electionengine-year-button {
        background-color: #f1f1f1;
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
</style>
