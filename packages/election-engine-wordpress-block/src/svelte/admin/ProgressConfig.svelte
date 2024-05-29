<script>
	import Button from "@election-engine/wordpress-block/src/svelte/components/svelte-wordpress-button.svelte";
	import YEARS from "@election-engine/common/years.json";
	export let years = YEARS;
	export let selected_year = 2024;
	export let show_title = true;
	export let show_blurb = true;
	export let show_buttons = false;
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
