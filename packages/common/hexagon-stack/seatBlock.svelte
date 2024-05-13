<script>
	import GautengPath from './gautengPath.svelte';

	export let node;
	export let grid;

	//const seatArray = [...Array(seats.seat).keys()];

	const colors = [
		{ party: 'ANC', color: '#FF0000' },
		{ party: 'DA', color: '#15616D' },
		{ party: 'EFF', color: '#FCF6B1' },
		{ party: 'UDM', color: '#F7B32B' },
		{ party: 'ATM', color: '#2D1E2F' },
		{ party: 'VF PLUS', color: '#FCE3B0' },
		{ party: 'ACDP', color: '#B38FB7' },
		{ party: 'AIC', color: '#C0ECCD' },
		{ party: 'PAC', color: '#FF7D00' },
		{ party: 'COPE', color: '#78290F' },
		{ party: 'ATA', color: '#FFA047' },
		{ party: 'SRWP', color: '#FFE6C2' },
		{ party: 'GOOD', color: '#FFE6C2' },
		{ party: 'ASC', color: '#ECCB83' },
		{ party: 'ZACP', color: '#DDDDDD' },
		{ party: 'ALJAMA', color: '#DDDDDD' },
		{ party: 'BLF', color: '#DDDDDD' },
		{ party: 'SRWP', color: '#DDDDDD' },
		{ party: 'IFP', color: '#DDDDDD' },
		{ party: 'NFP', color: '#DDDDDD' }
	];

	let seats = [];

	for (let i = 0; i < node.provinceResult[0].PartyBallotResults.length; i++) {
		if (node.provinceResult[0].PartyBallotResults[i].NumberOfSeats > 0) {
			for (let j = 0; j < node.provinceResult[0].PartyBallotResults[i].NumberOfSeats; j++) {
				seats.push({
					partyName: node.provinceResult[0].PartyBallotResults[i].Name,
					partyID: node.provinceResult[0].PartyBallotResults[i].Abbreviation,
					numberOfSeats: node.provinceResult[0].PartyBallotResults[i].NumberOfSeats,
					percentage: node.provinceResult[0].PartyBallotResults[i].Percentage,
					totalVotes: node.provinceResult[0].PartyBallotResults[i].Votes,
					isIndepedendent: node.provinceResult[0].PartyBallotResults[i].IsIndependent
				});
			}
		}
	}

	// for (let i=0; i<node.provinceTotalSeats; i++){
	//     seats.push({
	//         province: node.provinceID,
	//         partyName: node.provinceResult[0].partyBallotResults.Name
	//     })
	// }

	let isGauteng = node.provinceID === 'Gauteng' ? true : false;

	console.log(seats, 'seats');
</script>

<h2 class:gauteng={isGauteng}>{node.provinceID}</h2>
{#if isGauteng && !grid}
	<GautengPath />
{/if}
<div class="seat-wrapper" class:gauteng={isGauteng}>
	<div class="container">
		{#each seats as seat, i}
			<div class="seat-container" on:mouseover={() => console.log(seat)}>
				<div
					class="hexagon"
					style="background:{colors.filter((d) => seat.partyID === d.party)[0].color}"
				></div>
				<div class="small-hexagon"></div>
			</div>
			<!-- {console.log(colors.filter((d) => d.party === seat.partyID)[0].color)} -->
		{/each}
	</div>
</div>

<style>
	.seat-wrapper {
		display: flex;
		--s: 10px; /* size  */
		--m: 1px; /* margin */
		--f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
	}

	.container {
		min-width: 100px;
		font-size: 0; /*disable white space between inline block element */
	}

	.container .seat-container {
		position: relative;
		/* height: calc(var(--s) * 1.1547);
		width: var(--s); */
		display: inline-block;
		margin-bottom: calc(var(--m) - var(--s) * 0.2885);
	}

	.container .hexagon {
		width: var(--s);
		margin: var(--m);
		height: calc(var(--s) * 1.1547);
		display: inline-block;
		font-size: initial;
		clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
		background: #0d0d0d;
		margin-bottom: calc(var(--m) - var(--s) * 0.2885);
	}

	.small-hexagon {
		position: absolute;
		width: var(--s);
		height: calc(var(--s) * 1.1547);
		font-size: initial;
		margin: var(--m);
		top: 0;
		left: 0;
		clip-path: polygon(4% 28%, 4% 73%, 50% 95%, 96% 72%, 96% 28%, 50% 4%);
	}
	/* .container div:nth-child(odd) {
		background: green;
	} */
	.container::before {
		content: '';
		width: calc(var(--s) / 2 + var(--m));
		float: left;
		height: 120%;
		shape-outside: repeating-linear-gradient(#0000 0 calc(var(--f) - 3px), #000 0 var(--f));
	}

	h2 {
		margin: 0 auto;
		padding-bottom: 4px;
		text-align: center;
		font-size: 12px;
		font-family: Helvetica;
		color: gray;
	}

	h2.gauteng {
		transform: translate(-165%, -560%);
	}

	.seat-wrapper.gauteng {
		transform: translate(-145%, -190%);
	}

	@media (width < 600px) {
		h2.gauteng {
			transform: translate(0%, 0%);
		}

		.seat-wrapper.gauteng {
			transform: translate(0%, 0%);
		}
	}
</style>
