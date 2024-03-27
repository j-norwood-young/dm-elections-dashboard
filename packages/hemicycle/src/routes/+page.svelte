<script lang="ts">
  import Hemicycle from 'svelte-hemicycle';

   const data = [
      {
          "id": 1,
          "text": "UDFMP",
          "count": 160,
          "color": "#FF0000"
      },
      {
          "id": 2,
          "text": "PDMF",
          "count": 150,
          "color": "#00FF00"
      },
      {
          "id": 3,
          "text": "DA",
          "count": 40,
          "color": "#0000FF"
      },
      {
          "id": 4,
          "text": "PDP",
          "count": 30,
          "color": "#FFFF00"
      },
      {
          "id": 5,
          "text": "APC",
          "count": 20,
          "color": "#00FFFF"
      }
  ]
  const total_seats = 400;
  const rows= 12;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
	Hemicycle
	</h1>
	<Hemicycle {data} {rows} {total_seats} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
