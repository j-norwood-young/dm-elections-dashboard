<script>
	import { onMount } from 'svelte';
	import Hemicycle from 'svelte-hemicycle';
	import { useMediaQuery } from 'svelte-breakpoints';

	import { toggleColorScheme, decorateWithColors } from '$lib/load-colors';
	import {
		fetch2009Data,
		generateHemicycleInformation,
		loadDefaultDataSet,
		dataMapper
	} from '$lib/load-data';
	import TabularData from '#tabular/tabular-results.svelte';

	const isSmall = useMediaQuery('(max-width: 200px)');
	const isMedium = useMediaQuery('(min-width: 480px)');
	const isBigger = useMediaQuery('(min-width: 720px)');
	const isRest = useMediaQuery('(min-width: 1024px)');

	let current_party, defaultDataJson, defaultData;

	const DEFAULT_COLOR_SCHEME = 'high';

	const rows = 12;
	const display = ['points', 'text'];
	const color = 'black';
	const font_size = '20';
	const selectedShape = 'hexagon';

	let data, total_seats, heading, selectedScheme, arc, className, hcWidth, hcHeight;

	onMount(async () => {
		const manipulateHemicycle = (data) => {
			selectedScheme = toggleColorScheme(DEFAULT_COLOR_SCHEME);
			return selectedScheme && decorateWithColors(data, selectedScheme);
		};

		defaultData = (await loadDefaultDataSet()).partyResults.map(dataMapper);
		defaultData = manipulateHemicycle(defaultData);

		data2009 = (await fetch2009Data()).partyResults.map(dataMapper);
		data2019 = (await fetch2019Data()).partyResults.map(dataMapper);
		data2024 = (await fetch2024Data()).partyResults.map(dataMapper);
	});

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

	data = defaultData;
	total_seats = 400;
	heading = '2014';
	const loadData = (year) => {
		const { title, seats, modified } = generateHemicycleInformation(year);
		heading = title;
		total_seats = seats;
		data = modified;
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
	<div class={className} id="hemicycle">
		<Hemicycle
			bind:current_party
			{hcWidth}
			{hcHeight}
			{data}
			{rows}
			{display}
			{color}
			{font_size}
			{selectedShape}
			{arc}
			{total_seats}
		/>
	</div>
	{#if current_party}
		<div>
			{current_party?.text}
			{current_party?.count}
		</div>
	{/if}
	<h2>Tabular Data</h2>
	<TabularData></TabularData>
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
