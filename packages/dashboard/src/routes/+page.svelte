<script>
	import Hemicycle from 'svelte-hemicycle';
	import { toggleColorScheme, decorateWithColors } from '$lib/load-colors';
	import { generateHemicycleInformation, loadDefaultDataSet } from '$lib/load-data';

	const rows = 12;
	const display = ['points', 'text'];
	const color = 'black';
	const font_size = '20';
	const selectedShape = 'hexagon';

	let data, total_seats, heading, selectedScheme;

	data = loadDefaultDataSet();
	total_seats = 400;
	heading = '2014';

	const loadData = (year) => {
		const { title, seats, modified } = generateHemicycleInformation(year);
		heading = title;
		total_seats = seats;
		data = modified;
	};

	const manipulateHemicycle = (scheme) => {
		selectedScheme = toggleColorScheme(scheme);
		data = selectedScheme && decorateWithColors(data, selectedScheme);
	};
</script>

<svelte:head>
	<title>The Daily Maverick - National Elections 2024 - Hemicycle</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>{heading} National Elections</h1>
	<div id="toggleBar">
		<button type="button" on:click={() => loadData('2014')}>2014</button>
		<button type="button" on:click={() => loadData('2019')}>2019</button>
		<button type="button" disabled={true} title="Not available yet!">2024</button>
	</div>
	<div id="toggleBar">
		<h3>Color Schemes</h3>
		<button type="button" on:click={() => manipulateHemicycle('high')}>High-contrast</button>
		<button type="button" on:click={() => manipulateHemicycle('low')}>Subdued</button>
		<button type="button" on:click={() => manipulateHemicycle('dm')}>DM Proposal</button>
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
