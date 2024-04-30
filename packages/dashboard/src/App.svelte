<script>
  import "./app.css";
  import Header from "$lib/components/Header.svelte";
  import HemicycleView from "$components/Hemicycle-view.svelte";
  import TabularData from "$tabular/tabular-results.svelte";
</script>

<div class="app">
  <Header></Header>
  <main>
    <section>
      <HemicycleView></HemicycleView>
      <h2>Tabular Data</h2>
      <TabularData></TabularData>
    </section>
  </main>

  <footer>
    <p>© 2024</p>
  </footer>
</div>
