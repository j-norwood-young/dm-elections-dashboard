<script>
  import BackgroundMap from "../backgroundMap.svelte";
  import Legend from "../legend.svelte";

  export let data;
  export let innerWidth;
</script>

{#if data}
  <Legend bind:data />
{/if}

<p>
  200 Regional Seats, divided between the regions* based on registered population, prior to the elections. The regions
  are contested by parties and independent candidates.
</p>

{#if data}
  <BackgroundMap {innerWidth} bind:data />
{/if}

<style>
  @media (width < 400px) {
    p {
      font-size: 0.8rem;
    }
  }
</style>
