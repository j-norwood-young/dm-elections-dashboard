<script>
	import Hemicycle from 'svelte-hemicycle';
	import { useMediaQuery } from 'svelte-breakpoints';

	import { toggleColorScheme, decorateWithColors } from '$lib/load-colors';
	import { generateHemicycleInformation, loadDefaultDataSet } from '$lib/load-data';

	const isSmall = useMediaQuery('(max-width: 200px)');
	const isMedium = useMediaQuery('(min-width: 480px)');
	const isBigger = useMediaQuery('(min-width: 720px)');
	const isRest = useMediaQuery('(min-width: 1024px)');

	const rows = 12;
	const display = ['points', 'text'];
	const color = 'black';
	const font_size = '20';
	const selectedShape = 'hexagon';

	let data, total_seats, heading, selectedScheme, arc, className, hcWidth, hcHeight;

	$: {
		if ($isSmall) {
			arc = 360;
			className = 'small';
			hcWidth = 10;
			hcHeight = 10;
		}
		if ($isMedium) {
			arc = 300;
			hcWidth = 220;
			hcHeight = 220;
		}
		if ($isBigger) {
			arc = 270;
			hcWidth = 420;
			hcHeight = 420;
		}
		if ($isRest) {
			arc = 180;
			hcWidth = 620;
			hcHeight = 620;
		}
	}

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
	<h2>Year Data</h2>
	<div class={$isSmall === true ? 'toggleBar mobileSmall' : 'toggleBar default'}>
		<button type="button" on:click={() => loadData('2014')}>2014</button>
		<button type="button" on:click={() => loadData('2019')}>2019</button>
		<button type="button" disabled={true} title="Not available yet!">2024</button>
	</div>
	<h2>Color Schemes</h2>
	<div class={$isSmall === true ? 'toggleBar mobileSmall' : 'toggleBar default'}>
		<button type="button" on:click={() => manipulateHemicycle('high')}>High-contrast</button>
		<button type="button" on:click={() => manipulateHemicycle('low')}>Subdued</button>
		<button type="button" on:click={() => manipulateHemicycle('dm')}>DM Proposal</button>
	</div>
	<div class={className}>
		<Hemicycle
			{hcWidth}
			{hcHeight}
			{data}
			{rows}
			{total_seats}
			{display}
			{color}
			{font_size}
			{selectedShape}
			{arc}
		/>
	</div>
</section>

<style>
	.toggleBar {
		margin-bottom: 2rem;
	}
	.default {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		flex-grow: 1;
		justify-content: space-between;
		width: 25vw;
	}
	.mobileSmall {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		flex-grow: 1;
	}
	.mobileSmall > button {
		margin-bottom: 4px;
	}
	.small {
		width: fit-content;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.4;
	}
	button {
		background-color: var(--color-bg-3);
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		color: var(--color-white);
		transition: border-color 0.25s;
	}
	button:not([disabled]):hover {
		border: 1px solid var(--color-white);
	}
	button[disabled] {
		background-color: var(--color-white);
		border-color: 1px solid var(--color-black);
		color: var(--color-black);
		cursor: not-allowed;
	}
	h1 {
		width: 100%;
	}
</style>
