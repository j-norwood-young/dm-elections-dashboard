<script>
  import "./app.css";

  import TabularData from "$tabular/tabular-results.svelte";
  import HemicycleView from "$components/Hemicycle-view.svelte";
</script>

<div class="app">
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
