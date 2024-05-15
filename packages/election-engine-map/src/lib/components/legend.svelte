<script>
  // This needs to be rewritten to use the parties that are in the data
  import { partyColors, genericColors } from "@election-engine/common/color-scheme.json";

  let colors = [];
  for (const [party, color] of Object.entries(partyColors)) {
    colors.push({ party, color });
  }

  console.log(partyColors);
</script>

<div class="legend-wrapper">
  <h2>Legend: Party Colors</h2>
  <div class="legend">
    {#each colors as color}
      <div class="party-wrapper">
        <div class="hexagon" style="background: {color.color};"></div>
        <p>{color.party}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .legend-wrapper {
    position: relative;
    margin-bottom: 1rem;
    z-index: 99;
  }
  .legend {
    display: flex;
    gap: 1rem;
    padding: 10px 10px;
    background: #f4f0f0;
    border-radius: 4px;
    width: 360px;
    justify-content: space-between;
    overflow-x: scroll;
  }

  .party-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  h2 {
    font-size: 12px;
    margin: 0;
    padding-bottom: 2px;
  }

  p {
    color: #828282;
    font-size: 10px;
  }

  .hexagon {
    width: 12px;
    height: 12px;
    background: black;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  }
</style>
