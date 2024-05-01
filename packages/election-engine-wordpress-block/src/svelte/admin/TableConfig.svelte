<script>
	import Button from '@election-engine/wordpress-block/src/svelte/components/svelte-wordpress-button.svelte'
	export let years = [2024, 2019, 2014]
	export let selected_year = 2024;
	export let elections = ['National Assembly', 'Provincial Legislature']
	export let selected_election = 'National Assembly'
	export let regions = ['National', 'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape']
	export let selected_region = 'National'
	export let fields = ['Party', 'Votes', 'Seats']
	export let selected_fields = ['Party', 'Votes', 'Seats']
</script>
<div class="election-engine-selection-container">
	<h4>Select Year</h4>
	{#each years as year}
		<div class="option"><Button primary={selected_year === year} on:click={() => selected_year = year}>{year}</Button></div>
	{/each}
	<h4>Select Election</h4>
	{#each elections as election}
		<div class="option"><Button primary={selected_election === election} on:click={() => selected_election = election}>{election}</Button></div>
	{/each}
	<h4>Select Region</h4>
	{#each regions as region}
		<div class="option"><Button primary={selected_region === region} on:click={() => selected_region = region}>{region}</Button></div>
	{/each}
	<h4>Select Fields</h4>
	{#each fields as field}
		<div class="option"><Button primary={selected_fields.includes(field)} on:click={() => {
			if (selected_fields.includes(field)) {
				selected_fields = selected_fields.filter(f => f !== field)
			} else {
				selected_fields = [...selected_fields, field]
			}
			selected_fields = selected_fields
		}}>{field}</Button></div>
	{/each}
</div>
<style>
	.election-engine-selection-container .option {
		display: inline-block;
		margin-right: 10px;
	}
</style>
