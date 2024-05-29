<script>
	import { onMount } from "svelte";
	import Cartogram from "@election-engine/map/src/App.svelte";
	import Table from "@election-engine/table/src/App.svelte";
	import Hemicycle from "@election-engine/hemicycle/src/App.svelte";
	import Progress from "@election-engine/progress/src/App.svelte";

	export let visualisation = "hemicycle";
	export let selected_year = 2024;
	export let selected_election = "National Assembly";
	export let selected_region = "Eastern Cape";
	export let show_title = true;
	export let show_blurb = true;
	export let show_buttons = false;

	onMount(async () => {});
</script>

<div class="electionengine-widget">
	{#if visualisation === "hemicycle"}
		<Hemicycle
			{selected_year}
			{selected_election}
			{selected_region}
			{show_title}
			{show_blurb}
			{show_buttons}
		/>
	{/if}
	{#if visualisation === "carto"}
		<Cartogram
			{selected_year}
			{selected_election}
			{selected_region}
			{show_title}
			{show_blurb}
			{show_buttons}
		/>
	{/if}
	{#if visualisation === "table"}
		<Table
			{selected_year}
			{selected_election}
			{selected_region}
			{show_title}
			{show_blurb}
			{show_buttons}
		/>
	{/if}
	{#if visualisation === "progress"}
		<Progress {selected_year} {show_title} {show_blurb} {show_buttons} />
	{/if}
</div>

<style>
	.electionengine-widget {
		position: relative;
		width: 100%;
		height: 100%;
		border: 1px solid #ccc;
		border-radius: 6px;
	}
</style>
