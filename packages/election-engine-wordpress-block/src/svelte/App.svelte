<script>
	import { onMount } from 'svelte';
	import Cartogram from '@election-engine/map/src/App.svelte';

	import Hemicycle from 'svelte-hemicycle';
	import Table from "@election-engine/wordpress-block/src/svelte/components/Table.svelte";

	export let visualisation = 'hemicycle';
	export let selected_year = 2024;
	export let selected_election = 'National Assembly';
	export let selected_region = 'Gauteng';
	export let selected_fields = ['Party', 'Votes', 'Seats'];

	let data = []
	const colours = [
		"#FF0000",
		"#0000FF",
		"#008000",
		"#FFA500",
		"#FFFF00",
		"#800080",
		"#FFC0CB",
		"#00FFFF",
		"#FF00FF",
		"#000000",
		"#808080",
		"#800000",
		"#008080",
		"#800080",
		"#000080",
		"#808000",
		"#008000"
	]
	const total_seats = 400;
	const rows= 12;
	onMount(async () => {
		const live_results = await fetch("https://iec-api.revengine.dailymaverick.co.za/results/seats/national/2019");
		const live_results_json = await live_results.json();
		data = live_results_json.partyResults.map((party, id) => {
			return {
				id: id,
				text: party.Abbreviation,
				count: party.Seats,
				color: colours[id],
			};
		});
	});
</script>
{#if visualisation === "hemicycle"}
	<Hemicycle {data} {total_seats} {rows} />
{/if}
{#if visualisation === "carto"}
	<Cartogram {selected_year} {selected_election} {selected_region} />
{/if}
{#if visualisation === "table"}
	<h1>Table</h1>
	<Table {selected_year} {selected_election} {selected_region} {selected_fields} />
{/if}

