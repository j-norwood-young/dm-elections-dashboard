<script>
  import "./app.css";
  import Header from "$lib/components/Header.svelte";
  import HemicycleView from "$components/Hemicycle-view.svelte";
  import TabularData from "$components/tabular-results.svelte";
  import StaticTabularResults from "$lib/components/static-tabular-results.svelte";
</script>

<div class="app">
  <Header></Header>
  <main>
    <section>
      <HemicycleView></HemicycleView>
      <h2>Results Breakdown</h2>
      <StaticTabularResults></StaticTabularResults>
    </section>
  </main>

  <footer>
    <p>© 2024</p>
  </footer>
</div>
