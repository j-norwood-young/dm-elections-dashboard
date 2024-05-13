<script>
	// import vote2019 from '$lib/data/votes-2019.json';
	import { regionalSeatAllocation } from '$lib/libs/seats.js';

	import SeatBlock from './libs/seatBlock.svelte';

	export let path;
	export let provinces;
	export let grid;
	export let data;

	$: data2019 = provinces.map((d) => {
		const coords = path.centroid(d);
		const regionSeat = regionalSeatAllocation.filter((e) => d.properties.PROVINCE === e.region)[0];
		const provinceResult = data.filter((e) => d.properties.PROVINCE === e.Province);
		const provinceID = d.properties.PROVINCE;
		const provinceTotalSeats = regionSeat.seat;
		const height = 50;
		const width = 50;
		return {
			provinceID,
			provinceTotalSeats,
			coords,
			regionSeat,
			provinceResult,
			height,
			width,
			x: coords[0],
			y: coords[1]
		};
	});

	//$: console.log(data2019);
</script>

<div id="cartogram" class:mb-grid={grid}>
	{#each data2019 as node}
		<div
			class="block"
			class:mb-grid={grid}
			style="left:{node.x - node.width / 2}px; top:{node.y - node.height / 2}px;"
		>
			<SeatBlock {node} {grid} />
		</div>
	{/each}
</div>

<style>
	#cartogram {
		width: 600px;
		height: 600px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	#cartogram.mb-grid {
		width: 100%;
		position: static;
		height: 450px;
		transform: translate(0, 0);
		display: grid;
		grid-template-columns: 50% 50%;
		padding-top: 9rem;
	}

	.block {
		position: absolute;
		width: 100px;
	}

	.block.mb-grid {
		position: static;
		align-self: center;
		justify-self: center;
	}
</style>
