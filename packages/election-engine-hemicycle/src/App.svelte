<script>
    import { onMount } from "svelte";
    import Hemicycle from "../../hemicycle/src/lib/Hemicycle.svelte";

    import { loadData } from "@election-engine/common/loadData.js";
    import { partyColor } from "@election-engine/common/colors.js";
    import YEARS from "@election-engine/common/years.json";
    import PROVINCES from "@election-engine/common/provinces.json";

    import "./app.css";

    export let selected_year = 2024; // 2024, 2019, 2014
    export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
    export let selected_region = "National"; // National, Gauteng, Western Cape, etc.
    export let show_buttons = false;
    export let show_title = true;

    let current_party;

    const rows = 12;
    const display = ["points"];
    const color = "black";
    const font_size = "20";
    const selectedShape = "hexagon";
    export let total_seats = 400;

    let data, arc;

    onMount(async () => {
        data = await processData();
        console.log(data);
    });

    async function setYear(year) {
        if (year === selected_year) return;
        selected_year = year;
        data = await processData();
    }

    async function processData() {
        const data = await loadData({
            year: selected_year,
            election: selected_election,
            region: selected_region,
            type: "seats",
        });
        const mappedData = data.PartyResults.map((party, i) => {
            return {
                id: party.Abbreviation,
                text: party.Name,
                count: party.Seats,
                color: partyColor(party.Abbreviation, i),
                percentage: (party.Seats / total_seats) * 100,
            };
        });
        return mappedData;
    }

    $: {
    }
</script>

<div class="election-engine-hemicycle-app">
    {#if show_buttons}
        {#each YEARS as year}
            <button on:click={() => setYear(year)}>{year}</button>
        {/each}
    {/if}
    {#if show_title}
        <div class="electionengine-title">
            {selected_region === "National"
                ? `General Asssembly seat allocation for ${selected_year}`
                : `Provincial Legislature seat allocation for ${selected_year}`}
        </div>
    {/if}
    <div class="election-engine-hemicycle-section">
        <div class="electionengine-hemicycle-container">
            <Hemicycle
                bind:current_party
                displayHeight={"640px"}
                {data}
                {rows}
                {display}
                {color}
                {font_size}
                {selectedShape}
                {arc}
                {total_seats}
            />
        </div>
        {#if current_party}
            <div class="electionengine-party-results-information-container">
                <div
                    class="electionengine-party-results-information"
                    style:border-left="6px {current_party?.color} solid"
                >
                    <div class="electionengine-party-name">
                        {current_party?.text}
                    </div>
                    <div class="electionengine-seat-count">
                        {current_party?.count} seats
                    </div>
                    <div
                        class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata"
                    >
                        <div class="electionengine-tooltip-range">
                            <div class="electionengine-tooltip-outer">
                                <div
                                    class="electionengine-tooltip-inner"
                                    style="width:{current_party.percentage}%; background:{current_party.color}"
                                ></div>
                            </div>
                        </div>
                        <span>
                            {Math.round(current_party.percentage) ||
                                "<1"}%</span
                        >
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .electionengine-title {
        font-size: 20px;
        font-weight: 700;
        margin: 10px;
        line-height: 1.2;
        width: 100%;
        text-align: center;
    }

    .election-engine-hemicycle-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: top;
        flex: 0.4;
        /* min-height: 500px; */
        position: relative;
    }

    .electionengine-hemicycle-container {
        height: 320px;
        overflow-y: hidden;
    }

    .electionengine-party-results-information-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: white;
    }

    .electionengine-party-results-information {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        text-align: center;
        width: 200px;
        font-size: 12px;
    }

    .electionengine-party-name {
        font-weight: bold;
    }

    .electionengine-tooltip-tdata {
        font-size: 12px;
        color: #2a2a2a;
        font-weight: bold;
        border-bottom: 1px solid #c7c4c4;
    }

    .electionengine-tooltip-range-wrapper {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .electionengine-tooltip-range {
        position: relative;
        width: 100%;
        height: 12px;
    }

    .electionengine-tooltip-outer {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #f2f2f2;
        border-radius: 12px;
    }

    .electionengine-tooltip-inner {
        height: 100%;
        width: 73%;
        position: absolute;
        border-radius: inherit;
    }

    .electionengine-tooltip-container
        > div:last-child
        .electionengine-tooltip-tdata {
        border-bottom: none;
    }
</style>
