<script>
    import { onMount, onDestroy } from "svelte";
    import {
        get_progress,
        ok_to_update,
    } from "@election-engine/common/loadData.js";
    import YEARS from "@election-engine/common/years.json";
    import Loading from "@election-engine/common/Loading.svelte";
    import Range from "@election-engine/map/src/lib/components/range.svelte";
    const current_year = new Date().getFullYear();

    export let selected_year = 2024; // 2024, 2019, 2014
    export let show_buttons = false;
    export let show_title = true;
    export let show_blurb = true;

    let loading = false;
    let data;
    let container_el;
    let interval;
    let timeout;
    let warning = false;

    onMount(async () => {
        await getData();
        interval = setInterval(async () => {
            if (
                selected_year === current_year &&
                !loading &&
                ok_to_update(container_el)
            ) {
                await getData();
            }
        }, 60000); // 60 seconds
    });

    onDestroy(() => {
        clearInterval(interval);
        clearTimeout(timeout);
    });

    async function setYear(year) {
        if (year === selected_year) return;
        selected_year = year;
        data = await get_progress(selected_year);
    }

    async function getData() {
        loading = true;
        warning = false;
        clearTimeout(timeout);
        try {
            timeout = setTimeout(() => {
                warning = true;
            }, 10000);
            data = await get_progress(selected_year);
        } catch (e) {
            warning = true;
        } finally {
            loading = false;
            clearTimeout(timeout);
        }
    }

    function number_format(number) {
        return new Intl.NumberFormat().format(number);
    }
</script>

<div class="electionengine-progress-widget" bind:this={container_el}>
    <Loading bind:loading />
    {#if warning}
        <div class="electionengine-warning">
            We could not update the data. Please try again later.
        </div>
    {/if}
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
    {/if}
    {#if show_title}
        <h4>
            {selected_year} Election Progress
        </h4>
    {/if}
    {#if data}
        <div class="electionengine-progress">
            <div class="electionengine-bignumber">
                {`${(0.34567891 * 100).toFixed(1)}%`}
                <Range
                    max={data.VDTotal}
                    value={data.VDResultsIn}
                    background_color={"#444"}
                    show_percentage={false}
                />
            </div>

            {#if data.SeatCalculationCompleted}
                <div
                    class="electionengine-status electionengine-status-complete"
                >
                    <p>Vote counting is complete.</p>
                </div>
            {:else}
                <div
                    class="electionengine-status electionengine-status-in_progress"
                >
                    <p>Vote counting is in progress</p>
                </div>
            {/if}
            {#if show_blurb}
                <div class="electionengine-blurb">
                    {number_format(data.VDResultsIn)} of {number_format(
                        data.VDTotal
                    )} voting districts have reported their results.
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
    .electionengine-progress-widget {
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

    h4 {
        text-align: center;
    }

    .electionengine-progress {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 300px;
        margin: 0 auto;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        background-color: #e6e6e6;
    }

    .electionengine-bignumber {
        font-size: 4em;
        margin-bottom: 10px;
    }

    .electionengine-blurb {
        border-top: 1px solid #898989;
        border-bottom: 1px solid #898989;
        font-size: 1.2em;
    }

    .electionengine-status {
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 5px 10px;
        color: white;
        margin: 10px 0 20px 0;
        font-size: 1.2em;
    }

    .electionengine-status-in_progress {
        background-color: #4caf50;
    }

    .electionengine-status-complete {
        background-color: #787878;
    }
</style>
