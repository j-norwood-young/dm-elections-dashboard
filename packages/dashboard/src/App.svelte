<script>
  import "./app.css";
  import Header from "$components/Header.svelte";
  import { HemicycleView } from "$components/hemicycle-view";
  import TabularData from "$components/tabular-results";
  import StaticTabularResults from "$components/static-tabular-results";
</script>

<div class="app">
  <Header></Header>
  <main>
    <section>
      <HemicycleView></HemicycleView>
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
