<script>
	import Cartogram from '$lib/cartogram.svelte';

	import geoData from '$lib/data/sa-province.json';
	import { geoArea, geoIdentity, geoPath } from 'd3-geo';

	export let data;
	export let innerWidth;

	$: grid = innerWidth < 600 ? true : false;

	let width = 600;
	let height = 600;

	let provinces = geoData.features;

	/**
	 * geoIdentity - new geographic projection with an identity transformation
	 * [20, 20] - Minimum X and Y coordinates for the map
	 * [width, height] - set the map dimensions
	 * data - Data to fit the extent
	 */
	const projection = geoIdentity()
		.reflectY(true)
		.fitExtent(
			[
				[20, 20],
				[width, height]
			],
			geoData
		);

	// Geographic path generator based on the projection configured above.
	const path = geoPath(projection);

	//console.log(data);
</script>

<div class="svg-wrapper">
	{#if !grid}
		<svg class:grid={innerWidth < 400 ? false : true} {width} {height}>
			<!-- Countries -->
			<g id="saMap">
				{#each provinces as province}
					<path d={path(province)} fill="#ECECEC" stroke="white" stroke-width="0.94" />
				{/each}
			</g>
		</svg>
	{/if}
	<Cartogram {provinces} {path} {grid} {data} />
</div>

<style>
	.svg-wrapper {
		position: relative;
		height: 100vh;
		margin-top: -7.75rem;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
