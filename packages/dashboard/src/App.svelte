<script>
  import "./app.css";
  import Header from "$components/Header.svelte";
  import HemicycleView from "$components/hemicycle-view/hemicycle-view.svelte";
  import TabularData from "$components/tabular-results/tabular-results.svelte";
  import StaticTabularResults from "$components/static-tabular-results/static-tabular-results.svelte";
</script>

<div class="app">
  <Header></Header>
  <main>
    <section>
      <HemicycleView></HemicycleView>
      <h2>Results Breakdown</h2>
      <div class="toggleBar default">
        <button type="button" on:click={() => loadData("2009")}>2009</button>
        <button type="button" on:click={() => loadData("2014")}>2014</button>
        <button type="button" on:click={() => loadData("2019")}>2019</button>
        <button type="button" disabled={true} title="Not available yet!"
          >2024</button
        >
      </div>
      <StaticTabularResults></StaticTabularResults>
    </section>
  </main>

  <footer>
    <p>© 2024</p>
  </footer>
</div>

<style>
  @import "$components/results-header/action-buttons.css";
</style>
