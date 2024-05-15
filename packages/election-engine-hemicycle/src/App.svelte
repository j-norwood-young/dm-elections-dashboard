<script>
  import "./app.css";
  import { HemicycleView } from "$components/hemicycle-view";

  export let selected_year = 2024; // 2024, 2019, 2014
  export let selected_election = "National Assembly"; // National Assembly, Provincial Legislature
  export let selected_region = "National"; // National, Gauteng, Western Cape, etc.
</script>

<div class="app">
  <main>
    <section>
      <HemicycleView {selected_year} {selected_election} {selected_region}
      ></HemicycleView>
    </section>
  </main>
</div>
