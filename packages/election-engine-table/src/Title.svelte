<script>
    export let selected_election;
    export let selected_year;
    export let selected_region;
    export let selected_ballot;
</script>

<h4>
    {#if selected_election === "Provincial Legislature"}
        {selected_year}
        {selected_election}
        {selected_region} results
    {:else}
        {selected_year}
        {selected_election} results
        {#if selected_region !== "National"}
            for {selected_region}
        {/if}
        {#if selected_ballot !== "Combined"}
            ({selected_ballot} ballot)
        {/if}
    {/if}
</h4>

<style>
    h4 {
        text-align: center;
    }
</style>
