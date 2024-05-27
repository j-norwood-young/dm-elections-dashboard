<script>
    import { onMount } from "svelte";
    import { loadData } from "@election-engine/common/loadData.js";
    import { partyColor } from "@election-engine/common/colors.js";
    import YEARS from "@election-engine/common/years.json";
    import PROVINCES from "@election-engine/common/provinces.json";
    import Loading from "@election-engine/common/Loading.svelte";
    const current_year = new Date().getFullYear();

    export let selected_year = 2019; // 2024, 2019, 2014
    export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
    export let selected_region = "National"; // National, Gauteng, Western Cape, etc.
    export let show_buttons = false;
    export let show_title = true;
    export let show_count_progress = true;

    let provinces = PROVINCES;
    let loading = false;
    let data;

    onMount(async () => {
        data = await processData(selected_year);
        setInterval(async () => {
            if (selected_year === current_year) {
                data = await processData(selected_year);
            }
        }, 300000); // 5 minutes
    });

    async function setYear(year) {
        if (year === selected_year) return;
        selected_year = year;
        data = await processData(selected_year);
    }

    async function setRegion(region) {
        if (region === selected_region) return;
        selected_region = region;
        data = await processData(selected_year);
    }

    async function setElection(election) {
        if (election === selected_election) return;
        selected_election = election;
        if (election === "Provincial Legislature") {
            provinces = PROVINCES.filter(
                (p) => !["National", "Out of Country"].includes(p)
            );
            if (!provinces.includes(selected_region)) {
                selected_region = provinces[0];
            }
        } else {
            provinces = PROVINCES;
        }
        data = await processData(selected_year);
    }

    async function getData(year) {
        if (selected_election === "National Assembly") {
            const vote_results = await loadData({
                year,
                election: selected_election,
                region: selected_region,
            });
            if (selected_region !== "National") {
                const result = vote_results.provincial_results.find(
                    (r) => r.province_name === selected_region
                );
                return result;
            }
            return vote_results;
        } else {
            if (["National", "Out of Country"].includes(selected_region)) {
                return {
                    party_ballot_results: [],
                };
            }
            const vote_results = await loadData({
                year,
                election: selected_election,
                region: "National",
            });
            return vote_results.provincial_results.find(
                (r) => r.province_name === selected_region
            );
        }
    }

    async function processData(year) {
        loading = true;
        try {
            const current_year = await getData(year);
            if (year > YEARS[0]) {
                const previous_year = await getData(year - 5);
                for (let party of current_year.party_ballot_results) {
                    const previous_party = previous_year.party_ballot_results.find(
                        (p) => p.party_id === party.party_id
                    );
                    if (previous_party) {
                        party.change =
                            Math.round(
                                (party.vote_perc - previous_party.vote_perc) * 10
                            ) / 10;
                    } else {
                        party.change = null;
                    }
                }
            }
            return current_year;
        } catch (error) {
            console.error(error);
        } finally {
            loading = false;
        }
    }
</script>

<div class="electionengine-table-page">
    <Loading bind:loading />
    {#if show_buttons}
        <div class="electionengine-years-buttons">
            <button
                class="electionengine-year-button"
                on:click={() => setElection("National Assembly")}
                class:active={selected_election === "National Assembly"}
            >
                National Assembly
            </button>
            <button
                class="electionengine-year-button"
                on:click={() => setElection("Provincial Legislature")}
                class:active={selected_election === "Provincial Legislature"}
            >
                Provincial Legislature
            </button>
        </div>
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
        <div class="electionengine-years-buttons">
            {#if selected_election === "National Assembly"}
                <button
                    class="electionengine-year-button"
                    on:click={() => setRegion("National")}
                    class:active={selected_region === "National"}
                >
                    National
                </button>
            {/if}
            {#each provinces as province}
                <button
                    class="electionengine-year-button"
                    on:click={() => setRegion(province)}
                    class:active={selected_region === province}
                >
                    {province}
                </button>
            {/each}
        </div>
    {/if}
    {#if show_title}
        <div class="electionengine-title">
            {selected_year}
            {selected_election}
            {selected_region}
        </div>
    {/if}
    {#if show_count_progress && selected_year === current_year && data}
        <div class="electionengine-title">
            {data
                ? `${Math.round(data.vd_captured / data.vd_count * 100)}%  votes counted`
                : ""}
        </div>
    {/if}
    <div class="electionengine-table-container">
        <table class="electionengine-table">
            <thead>
                <tr style:border-left="6px #ccc solid">
                    <th class="electionengine-party-column">Party</th>
                    {#if selected_region !== "Out of Country"}
                        <th class="electionengine-seats-column">Seats</th>
                    {/if}
                    <th class="electionengine-votes-column">Votes</th>
                    {#if selected_year > 2009}
                        <th class="electionengine-change-column">Change</th>
                    {/if}
                </tr>
            </thead>
            <tbody>
                {#if data && data.party_ballot_results && data.party_ballot_results.length > 0}
                    {#each data.party_ballot_results as row, i}
                        <tr
                            style:border-left="6px {partyColor(
                                row.party_abbreviation,
                                i
                            )}
                            solid"
                            style:background-color={i % 2
                                ? "#f1f1f1"
                                : "#FFFFFF"}
                        >
                            <td class="electionengine-party-column"
                                >{row.party_name}</td
                            >
                            {#if selected_region !== "Out of Country"}
                                <td class="electionengine-seats-column"
                                    >{row.seats}</td
                                >
                            {/if}
                            <td class="electionengine-votes-column"
                                >{Intl.NumberFormat("en-US").format(
                                    row.votes
                                )}<div class="electionengine-perc">{Math.round(row.vote_perc * 10) / 10}%</div></td
                            >
                            {#if selected_year > 2009}
                                <td class="electionengine-change-column">
                                    {#if row.change > 0}
                                        <div
                                            class="electionengine-label electionengine-change-up"
                                        >
                                            +{row.change}%
                                        </div>
                                    {:else if row.change === 0}
                                        <div
                                            class="electionengine-label electionengine-change-nochange"
                                        >
                                            0%
                                        </div>
                                    {:else if row.change < 0}
                                        <div
                                            class="electionengine-label electionengine-change-down"
                                        >
                                            {row.change}%
                                        </div>
                                    {:else}
                                        <div
                                            class="electionengine-label electionengine-change-na"
                                        >
                                            N/A
                                        </div>
                                    {/if}
                                </td>
                            {/if}
                        </tr>
                    {/each}
                {:else}
                    <tr>
                        <td colspan="4">No results available yet</td>
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
</div>

<style>
    .electionengine-table-page {
        position: relative;
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

    .electionengine-table-container {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    table.electionengine-table {
        width: 500px;
        border-collapse: collapse;
        font-size: 14px;
    }

    table.electionengine-table th,
    table.electionengine-table td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    table.electionengine-table th {
        text-align: center;
    }

    .electionengine-table thead {
        background-color: #f1f1f1;
    }

    .electionengine-party-column {
        width: 300px;
    }

    .electionengine-seats-column {
        width: 100px;
        text-align: right;
    }

    .electionengine-change-column {
        width: 50px;
        text-align: center;
    }

    .electionengine-votes-column {
        width: 100px;
        text-align: right;
    }

    .electionengine-label {
        padding: 5px;
        border-radius: 5px;
        color: white;
        font-size: 10px;
        text-align: center;
        width: 40px;
        background-color: #444;
    }

    .electionengine-change-up {
        background-color: #4caf50;
    }

    .electionengine-change-down {
        background-color: #f44336;
    }

    .electionengine-change-nochange {
        background-color: #7a7a7a;
    }

    .electionengine-title {
        font-size: 20px;
        font-weight: bold;
        margin: 20px auto;
        line-height: 1.2;
        /* width: 100%; */
        text-align: center;
    }

    .electionengine-perc {
        font-size: 12px;
        color: #777;
        font-style: italic;
    }
</style>
