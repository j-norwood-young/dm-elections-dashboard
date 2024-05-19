<script>
	import { onMount } from "svelte";
	import Cartogram from "@election-engine/map/src/App.svelte";
	import Table from "@election-engine/table/src/App.svelte";
	import Hemicycle from "@election-engine/hemicycle/src/App.svelte";

	export let visualisation = "hemicycle";
	export let selected_year = 2024;
	export let selected_election = "National Assembly";
	export let selected_region = "Gauteng";
	export let selected_fields = ["Party", "Votes", "Seats"];

	onMount(async () => {
	});
</script>

{#if visualisation === "hemicycle"}
	<Hemicycle {selected_year} {selected_election} {selected_region} />
{/if}
{#if visualisation === "carto"}
	<Cartogram {selected_year} {selected_election} {selected_region} />
{/if}
{#if visualisation === "table"}
	<Table
		{selected_year}
		{selected_election}
		{selected_region}
		{selected_fields}
	/>
{/if}
