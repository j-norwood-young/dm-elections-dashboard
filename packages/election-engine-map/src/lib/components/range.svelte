<script>
    export let max;
    export let value;
    export let color = "#4CAF50";
    export let background_color = "#f2f2f2";
    export let show_percentage = true;
</script>

<div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
    <div class="electionengine-tooltip-range">
        <div
            class="electionengine-tooltip-outer"
            style:background-color={background_color}
        >
            <div
                class="electionengine-tooltip-inner"
                style="width:{(value / max) * 100}%; background:{color}"
            ></div>
        </div>
    </div>
    {#if show_percentage}
        <span class="electionengine-tooltip-span">
            {Math.round((value / max) * 100)}%
        </span>
    {/if}
</div>

<style>
    .electionengine-tooltip-range-wrapper {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        align-items: center;
    }

    .electionengine-tooltip-range {
        position: relative;
        width: 100%;
        height: 8px;

        @media screen and (max-width: 500px) {
            height: 6px;
        }
    }

    .electionengine-tooltip-outer {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #f2f2f2;
        border-radius: 8px;
    }

    .electionengine-tooltip-inner {
        height: 100%;
        width: 73%;
        position: absolute;
        border-radius: inherit;
    }

    .electionengine-tooltip-span {
        color: #232323;
        text-wrap: nowrap;
        font-size: 10px;
    }
</style>
