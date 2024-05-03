<script>
	export let selected_year = 2024; // 2024, 2019, 2014
	export let selected_election = 'National Assembly'; // National Assembly, Provincial Legislature
	export let selected_region = 'National'; // National, Gauteng, Western Cape, etc.
	export let selected_fields = ['Party', 'Votes', 'Seats']; // only for table
</script>

<table>
	<thead>
		<tr>
			{#each selected_fields as field}
				<th>{field}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>ANC</td>
			<td>10,000,000</td>
			<td>200</td>
		</tr>
		<tr>
			<td>DA</td>
			<td>5,000,000</td>
			<td>100</td>
		</tr>
		<tr>
			<td>EFF</td>
			<td>2,000,000</td>
			<td>40</td>
		</tr>
	</tbody>
</table>
