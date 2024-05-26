<script>
    import { fly, fade } from "svelte/transition";

    export let x_nudge = 40;
    export let y_nudge = 40;
    export let x;
    export let y;
    export let container_width;
    export let container_height;

    let tooltipWidth;
    let tooltipHeight;

    $: xPosition =
        x + tooltipWidth + x_nudge > container_width
            ? x - tooltipWidth - x_nudge
            : x + x_nudge - 40;
    $: yPosition =
        y + tooltipHeight + y_nudge > container_height
            ? y - tooltipHeight - y_nudge + 250
            : y - y_nudge + 40;
    $: console.log(xPosition, yPosition);
</script>

<div
    in:fly={{ y: 10, duration: 200, delay: 200 }}
    out:fade
    bind:clientWidth={tooltipWidth}
    bind:clientHeight={tooltipHeight}
    class="electionengine-tooltip-wrapper"
    style="top:{yPosition}px; left:{xPosition}px; position:fixed"
>
    <slot />
</div>

<style>
    .electionengine-tooltip-wrapper {
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        position: absolute;
        z-index: 99;
        display: flex;
        gap: 5px;
        padding: 5px;
        margin: 10px 0px;
        border-radius: 4px;
        justify-content: flex-start;
        flex-direction: column;
    }
</style>
