<script>
    import { onMount, onDestroy } from "svelte";
    import { fly, fade } from "svelte/transition";
    import Hemicycle from "svelte-hemicycle";

    import {
        loadData,
        ok_to_update,
    } from "@election-engine/common/loadData.js";
    import { partyColor } from "@election-engine/common/colors.js";
    import YEARS from "@election-engine/common/years.json";
    import PROVINCES from "@election-engine/common/provinces.json";
    import SEAT_COUNTS from "@election-engine/common/seat_counts.json";
    import Loading from "@election-engine/common/loading.svelte";

    let provinces = PROVINCES.filter((p) => p !== "Out of Country");

    import "./app.css";

    export let selected_year = 2024; // 2024, 2019, 2014
    export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
    export let selected_region = "National"; // National, Gauteng, Western Cape, etc.
    export let show_buttons = false;
    export let show_title = true;
    export let show_blurb = true;
    export let r = 300;

    let current_party;

    const shape = "hexagon";
    export let total_seats = 400;
    export let rows = 12;
    export let display = ["points"];
    export let blurb = null;
    let data, arc;
    let loading = false;
    let warning = false;
    let interval;
    let timeout;
    const current_year = new Date().getFullYear();

    onMount(async () => {
        data = await processData();
        interval = setInterval(async () => {
            if (
                selected_year === current_year &&
                !loading &&
                ok_to_update(container)
            ) {
                data = await processData();
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
        data = await processData();
    }

    async function setElection(election) {
        if (election === selected_election) return;
        selected_election = election;
        data = await processData();
    }

    async function setRegion(region) {
        if (region === selected_region) return;
        selected_region = region;
        if (region === "National") total_seats = 400;
        data = await processData();
    }

    async function processData() {
        loading = true;
        warning = false;
        clearTimeout(timeout);
        try {
            timeout = setTimeout(() => {
                if (loading) {
                    loading = false;
                    warning = true;
                    console.error("Data loading timeout");
                }
            }, 30000); // 30 seconds
            data = [];
            if (
                selected_region === "National" &&
                selected_election === "Provincial Legislature"
            ) {
                selected_region = provinces[0];
            }
            const loaded_data = await loadData({
                year: selected_year,
                election: selected_election,
                region: "National",
            });
            if (selected_election === "National Assembly") {
                blurb =
                    "The 400 seats of the National Assembly are calculated by assigning 200 from the provincial ballot and 200 from the national list. In 2024, the provincial ballot includes independent candidates.";
                selected_region = "National";
                const mappedData = loaded_data.party_ballot_results.map(
                    (party, i) => {
                        return {
                            id: party.party_id,
                            text: party.party_name,
                            count: party.seats,
                            color: partyColor(party.party_abbreviation, i),
                            percentage: party.vote_perc,
                        };
                    }
                );
                if (selected_year === 2024) {
                    for (let i = 0; i < mappedData.length; i++) {
                        // console.log(mappedData[i]);
                        const regional_ballot_result =
                            loaded_data.regional_party_ballot_results.find(
                                (party) => party.party_id === mappedData[i].id
                            );
                        mappedData[i].count +=
                            regional_ballot_result?.seats || 0;
                    }
                }
                total_seats = 400;
                rows = 13;
                r = 300;
                return mappedData;
            } else {
                const province_data = loaded_data.provincial_results.find(
                    (province) => province.province_name === selected_region
                );
                const mappedData = province_data.party_ballot_results
                    .filter((party) => party.seats > 0)
                    .map((party, i) => {
                        return {
                            id: party.party_id,
                            text: party.party_name,
                            count: party.seats,
                            color: partyColor(party.party_abbreviation, i),
                            percentage: party.vote_perc,
                        };
                    });
                total_seats =
                    SEAT_COUNTS["provincial"][selected_year][selected_region];
                blurb = `Each Provincial Legislature has a different number of seats. In ${selected_year}, the ${selected_region} Legislature has ${total_seats} seats.`;
                rows = Math.ceil(total_seats / 15);
                r = 200;
                return mappedData;
            }
        } catch (error) {
            console.error(error);
            warning = true;
        } finally {
            loading = false;
            clearTimeout(timeout);
        }
    }

    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }

    let container;
    let rect;
    let halfWidthPos;

    $: {
        if (container) {
            rect = container.getBoundingClientRect();
            halfWidthPos = rect ? Math.round((rect.right + rect.left) / 2) : 0;
        }
    }
</script>

<div class="election-engine-hemicycle-app" bind:this={container}>
    {#if loading}
        <Loading bind:loading />
    {/if}
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
            {:else}
                {#each provinces as province}
                    <button
                        class="electionengine-year-button"
                        on:click={() => setRegion(province)}
                        class:active={selected_region === province}
                    >
                        {province}
                    </button>
                {/each}
            {/if}
        </div>
    {/if}
    {#if show_title}
        <h4 class="electionengine-title">
            {selected_region === "National"
                ? `${selected_year} National Assembly seat allocation`
                : `${selected_year} ${selected_region} Provincial Legislature seat allocation `}
        </h4>
    {/if}
    <div class="election-engine-hemicycle-section">
        <div
            class="electionengine-hemicycle-container"
            on:mousemove={handleMousemove}
            role="presentation"
        >
            <Hemicycle
                bind:current_party
                display_height="320px"
                display_width="100%"
                {data}
                {rows}
                {display}
                {shape}
                {arc}
                {total_seats}
                {r}
            />
        </div>
        {#if blurb && show_blurb}
            <div class="electionengine-blurb">{blurb}</div>
        {/if}
        {#if current_party}
            <div
                class="electionengine-party-results-information-container"
                style:right={m.x < halfWidthPos ? "0" : "auto"}
                style:left={m.x < halfWidthPos ? "auto" : "0"}
                in:fly={{ y: 10, duration: 200, delay: 200 }}
                out:fade
            >
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
                        <span class="electionengine-tooltip-span">
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
    .election-engine-hemicycle-app {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 300px;
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

    .election-engine-hemicycle-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* flex: 0.4; */
        position: relative;
        width: 100%;
    }

    .electionengine-hemicycle-container {
        /* height: 320px; */
        overflow-y: hidden;
        /* margin-bottom: 20px; */
        display: flex;
        justify-content: center;
        width: 100%;
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

    .electionengine-party-results-information-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        background-color: white;
        @media screen and (min-width: 1280px) {
            left: 20%;
        }
        @media screen and (min-width: 900px) and (max-width: 1280px) {
            left: 10%;
        }
        @media screen and (max-width: 900px) and (min-width: 500px) {
            left: 0%;
        }
        @media screen and (max-width: 500px) {
            left: 0px;
            right: 0px;
        }
    }

    .electionengine-party-results-information {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        text-align: center;
        width: 150px;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
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

    .electionengine-tooltip-span {
        text-wrap: nowrap;
    }

    .electionengine-tooltip-container
        > div:last-child
        .electionengine-tooltip-tdata {
        border-bottom: none;
    }

    h4 {
        text-align: center;
    }
</style>
