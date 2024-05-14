<script>
    import { onMount } from "svelte";
    import { loadData } from "@election-engine/common/loadData.js";
    import { partyColor } from "@election-engine/common/colors.js";
    import YEARS from "@election-engine/common/years.json";
    import PROVINCES from "@election-engine/common/provinces.json";
    
    export let selected_year = 2019; // 2024, 2019, 2014
    export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
    export let selected_region = "National"; // National, Gauteng, Western Cape, etc.
    export let show_buttons = false;
    export let show_title = true;

    let data;

    onMount(async () => {
        data = await processData(selected_year);
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
        data = await processData(selected_year);
    }

    async function getData(year) {
        console.log({ year, selected_election, selected_region })
        const vote_results = await loadData({
            year, 
            election: selected_election, 
            region: selected_region, 
            type: "votes"
        });
        const parties = {};
        let total_votes = 0;
        for(let province_result of vote_results) {
            for (let party_result of province_result.PartyBallotResults) {
                if (parties[party_result.Abbreviation]) {
                    parties[party_result.Abbreviation].votes += party_result.Votes;
                } else {
                    parties[party_result.Abbreviation] = {
                        name: party_result.Name,
                        partyID: party_result.Abbreviation,
                        votes: party_result.Votes,
                        perc: party_result.Percentage,
                        seats: 0
                    };
                }
                total_votes += party_result.Votes;
            }
        }
        for (let party in parties) {
            parties[party].perc_votes = Math.round(parties[party].votes / total_votes * 1000) / 10;
        }
        let total_seats = 0;
        const seat_results = await loadData({
            year, 
            election: selected_election, 
            region: selected_region, 
            type: "seats"
        });
        for (let party_result of seat_results.PartyResults) {
            if (parties[party_result.Abbreviation]) {
                parties[party_result.Abbreviation].seats += party_result.Seats || party_result.NumberOfSeats;
            } else {
                parties[party_result.Abbreviation] = {
                    name: party_result.PartyName,
                    partyID: party_result.Abbreviation,
                    votes: 0,
                    seats: party_result.Seats || party_result.NumberOfSeats
                };
            }
            total_seats += party_result.Seats || party_result.NumberOfSeats;
        }
        const party_results = [];
        for (let party in parties) {
            party_results.push(parties[party]);
        }
        party_results.sort((a, b) => b.votes - a.votes);
        if (selected_region !== "National") {
            return party_results;
        }
        return party_results.filter(party => party.seats > 0);
    }

    async function processData(year) {
        const current_year = await getData(year);
        if (year > YEARS[0]) {
            const previous_year = await getData(year - 5);
            for (let party of current_year) {
                const previous_party = previous_year.find(p => p.partyID === party.partyID);
                if (previous_party) {
                    party.change = Math.round((party.perc_votes - previous_party.perc_votes) * 10) / 10;
                } else {
                    party.change = null;
                }
            }
        }
        return current_year;
    }
</script>

<div>
    {#if show_buttons}
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
            <button 
                class="electionengine-year-button"
                on:click={() => setRegion("National")}
                class:active={selected_region === "National"}
            >
                National
            </button>
            {#each PROVINCES as province}
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
        <div class="electionengine-title">General Election {selected_region} results for {selected_election}  {selected_year}</div>
        
    {/if}
    <div class="electionengine-table-container">
        <table class="electionengine-table">
            <thead>
                <tr style:border-left="6px #ccc solid">
                    <th class="electionengine-party-column">Party</th>
                    <th class="electionengine-seats-column">Seats</th>
                    <th class="electionengine-votes-column">Votes</th>
                    <th class="electionengine-change-column">Change</th>
                </tr>
            </thead>
            <tbody>
                {#if data}
                    {#each data as row, i}
                        <tr style:border-left="6px {partyColor(row.partyID, i)} solid" style:background-color={i % 2 ? "#f1f1f1" : "#FFFFFF" }>
                            <td class="electionengine-party-column">{row.name}</td>
                            <td class="electionengine-seats-column">{row.seats}</td>
                            <td class="electionengine-votes-column">{Intl.NumberFormat("en-US").format(row.votes)}</td>
                            <td class="electionengine-change-column">
                                {#if row.change > 0}
                                    <div class="electionengine-label electionengine-change-up">+{row.change}%</div>
                                {:else if row.change === 0}
                                    <div class="electionengine-label electionengine-change-nochange">0%</div>
                                {:else if row.change < 0}
                                    <div class="electionengine-label electionengine-change-down">{row.change}%</div>
                                {:else}
                                    <div class="electionengine-label electionengine-change-na">N/A</div>
                                {/if}
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
</div>

<style>
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
        display: flex;
        justify-content: center;
    }

    table.electionengine-table {
        width: 550px;
        border-collapse: collapse;
    }

    table.electionengine-table th, table.electionengine-table td {
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
        margin: 10px;
        line-height: 1.2;
        width: 100%;
        text-align: center;
    }
</style>