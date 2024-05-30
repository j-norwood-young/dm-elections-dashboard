<script>
    import { fade } from "svelte/transition";

    let fadeConfig = {
        duration: 300,
    };

    $: {
        if (loading) {
            fadeConfig = {
                duration: 300,
                delay: 0,
            };
        } else {
            fadeConfig = {
                duration: 300,
                delay: 300,
            };
        }
    }
    export let loading = false;
</script>

{#if loading}
    <div
        class="electionengine-loading"
        style="display: {loading ? 'flex' : 'none'};"
        transition:fade={fadeConfig}
    >
        <div class="electionengine-loader"></div>
    </div>
{/if}

<style>
    .electionengine-loading {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 9999;
        justify-content: center;
        align-items: center;
    }

    .electionengine-loader {
        opacity: 0.8;
        width: 45px;
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(#000 0 0);
        background:
            var(--c) 0% 50%,
            var(--c) 50% 50%,
            var(--c) 100% 50%;
        background-size: 20% 100%;
        animation: l1 2s infinite linear;
    }
    @keyframes l1 {
        0% {
            background-size:
                20% 100%,
                20% 100%,
                20% 100%;
        }
        33% {
            background-size:
                20% 10%,
                20% 100%,
                20% 100%;
        }
        50% {
            background-size:
                20% 100%,
                20% 10%,
                20% 100%;
        }
        66% {
            background-size:
                20% 100%,
                20% 100%,
                20% 10%;
        }
        100% {
            background-size:
                20% 100%,
                20% 100%,
                20% 100%;
        }
    }
</style>
