export async function load({ fetch }) {
	const response = await fetch(
		'https://iec-api.revengine.dailymaverick.co.za/results/votes/national/2019'
	);

	return {
		results: await response.json()
	};
}
