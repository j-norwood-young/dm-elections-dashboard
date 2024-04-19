<script>
	import Hemicycle from 'svelte-hemicycle';

	import data2014 from '$lib/data/seats_2014.json';
	const Data2014 = data2014.partyResults;
	import data2019 from '$lib/data/seats_2019.json';
	const Data2019 = data2019.partyResults;
	import colors from '$lib/data/color-scheme.json';

	let data, total_seats, heading, text_position;
	data = Data2014;
	total_seats = 400;
	heading = '2014';

	const calculateSeats = (arr) => arr.reduce((partialSum, item) => partialSum + item.count, 0);
	const show = (year) => {
		data = null;
		switch (year) {
			case '2014':
				data = Data2014;
				heading = '2014';
				break;
			case '2019':
				data = Data2019;
				heading = '2019';
				break;
			case '2024':
				heading = '2024';
				break;
		}
		total_seats = calculateSeats(data);
		const modified = data.map((item) => ({
			...item,
			text: `${item.text} (${item.count})`
		}));
		data = modified;
	};
	const toggleColorScheme = (scheme) => {
		let selectedScheme;
		switch (scheme) {
			case 'high':
				selectedScheme = colors.colorSchemes[0].high;
				break;
			case 'low':
				selectedScheme = colors.colorSchemes[1].low;
				break;
			case 'dm':
				selectedScheme = colors.colorSchemes[2].dm;
				break;
		}

		const filled = data.map((item, index) => ({
			...item,
			color: Object.entries(selectedScheme).at(index)[1]
		}));
		data = filled;
	};

	const rows = 12;
	const display = ['points', 'text'];
	const color = 'black';
	const font_size = '20';
	const selectedShape = 'hexagon';
</script>

<svelte:head>
	<title>The Daily Maverick - National Elections 2024 - Hemicycle</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>{heading} National Elections</h1>
	<div id="toggleBar">
		<button type="button" on:click={() => show('2014')}>2014</button>
		<button type="button" on:click={() => show('2019')}>2019</button>
		<button type="button" disabled={true} title="Not available yet!">2024</button>
	</div>
	<div id="toggleBar">
		<h3>Color Schemes</h3>
		<button type="button" on:click={() => toggleColorScheme('high')}>High-contrast</button>
		<button type="button" on:click={() => toggleColorScheme('low')}>Subdued</button>
		<button type="button" on:click={() => toggleColorScheme('dm')}>DM Proposal</button>
	</div>
	<Hemicycle {data} {rows} {total_seats} {display} {color} {font_size} {selectedShape} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.4;
	}
	#toggleBar {
		margin-bottom: 2rem;
	}
	button {
		background-color: var(--color-bg-3);
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		color: white;
		transition: border-color 0.25s;
	}
	button:not([disabled]):hover {
		border: 1px solid white;
	}
	button[disabled] {
		background-color: white;
		border-color: 1px solid black;
		color: black;
		cursor: not-allowed;
	}
	h1 {
		width: 100%;
	}
</style>
