<script>
	import '../app.css';
	import BackgroundMap from '$lib/backgroundMap.svelte';

	export let data;

	//console.log(data);

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="map-section">
	<div class="select-wrapper">
		<div class="select-button-wrapper">
			<button> National Assembly</button>
			<button> Provincial Legislature </button>
		</div>
		<p>
			200 Regional Seats, divided between the regions* based on registered population, prior to the
			elections. The regions are contested by parties and independent candidates.
		</p>
		<div class="select-button-wrapper">
			<button> 2014</button>
			<button> 2019 </button>
			<button> 2024</button>
		</div>
	</div>

	<BackgroundMap {innerWidth} data={data.results} />
</div>

<style>
	.map-section {
		padding: 1.5rem 1rem;
	}
	.select-wrapper {
		position: relative;
		z-index: 3;
	}

	.select-wrapper p {
		padding: 12px 0;
	}
	.select-button-wrapper {
		text-align: center;
		margin: 0 auto;
	}
</style>
