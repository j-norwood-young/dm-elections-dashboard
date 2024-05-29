<script>
	import Button from "@election-engine/wordpress-block/src/svelte/components/svelte-wordpress-button.svelte";
	import YEARS from "@election-engine/common/years.json";
	import PROVINCES from "@election-engine/common/provinces.json";
	export let years = YEARS.filter((year) => year >= 2014);
	export let selected_year = 2024;
	export let elections = ["National Assembly", "Provincial Legislature"];
	export let selected_election = "National Assembly";
	export let regions = PROVINCES.filter((p) => p !== "Out of Country");
	export let selected_region = "National";
	export let show_title = true;
	export let show_blurb = true;
	export let show_buttons = false;

	function selectElection(election) {
		if (election === selected_election) {
			return;
		}
		if (
			election === "Provincial Legislature" &&
			selected_region === "National"
		) {
			selected_region = regions[0];
		} else {
			selected_region = "National";
		}
		selected_election = election;
	}
</script>

<div class="election-engine-selection-container">
	<h4>Select Year</h4>
	{#each years as year}
		<div class="option">
			<Button
				primary={selected_year === year}
				on:click={() => (selected_year = year)}>{year}</Button
			>
		</div>
	{/each}
	<h4>Select Election</h4>
	{#each elections as election}
		<div class="option">
			<Button
				primary={selected_election === election}
				on:click={() => selectElection(election)}>{election}</Button
			>
		</div>
	{/each}
	{#if selected_election === "Provincial Legislature"}
		<h4>Select Province</h4>
		{#each regions as region}
			<div class="option">
				<Button
					primary={selected_region === region}
					on:click={() => (selected_region = region)}>{region}</Button
				>
			</div>
		{/each}
	{/if}
	<h4>Display Options</h4>
	<div class="option">
		<Button primary={show_title} on:click={() => (show_title = !show_title)}
			>Title</Button
		>
	</div>
	<div class="option">
		<Button primary={show_blurb} on:click={() => (show_blurb = !show_blurb)}
			>Blurb</Button
		>
	</div>
	<div class="option">
		<Button
			primary={show_buttons}
			on:click={() => (show_buttons = !show_buttons)}>Buttons</Button
		>
	</div>
</div>

<style>
	.election-engine-selection-container .option {
		display: inline-block;
		margin-right: 10px;
	}
</style>
