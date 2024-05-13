<script>
  import { currentScreenSize } from "./results-header-store";

  let currentScreen;

  $: {
    currentScreenSize.subscribe((val) => {
      currentScreen = val;
    });
  }
</script>

<main>
  <slot />
  <div
    class={currentScreen.small.query === true
      ? "toggleBar mobileSmall"
      : "toggleBar default"}
  >
    <button type="button" on:click={() => loadData("2009")}>2009</button>
    <button type="button" on:click={() => loadData("2014")}>2014</button>
    <button type="button" on:click={() => loadData("2019")}>2019</button>
    <button type="button" disabled={true} title="Not available yet!"
      >2024</button
    >
  </div>
</main>

<style src="./action-buttons.css"></style>
