<script>
  import GautengLinePath from "../gautengLinePath.svelte";

  export let data;
  export let grid;

  let seatArray = new Array(data.seat);

  //console.log(data);

  let isGauteng = data.region === "Gauteng" ? true : false;
</script>

<h2 class:gauteng={isGauteng}>{data.region}</h2>
{#if isGauteng && !grid}
  <GautengLinePath />
{/if}
<div class="seat-wrapper" class:gauteng={isGauteng}>
  <div class="electionengine-container">
    {#each seatArray as _}
      <div class="seat-container">
        <div class="hexagon"></div>
        <div class="small-hexagon"></div>
      </div>
    {/each}
  </div>
</div>

<style>
  .seat-wrapper {
    display: flex;
    --s: 10px; /* size  */
    --m: 1px; /* margin */
    --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
  }

  .electionengine-container {
    min-width: 100px;
    font-size: 0; /*disable white space between inline block element */
  }

  .electionengine-container .seat-container {
    position: relative;
    /* height: calc(var(--s) * 1.1547);
          width: var(--s); */
    display: inline-block;
    margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  }

  .electionengine-container .hexagon {
    width: var(--s);
    margin: var(--m);
    height: calc(var(--s) * 1.1547);
    display: inline-block;
    font-size: initial;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    background: rgb(121, 121, 121);
    margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  }

  .small-hexagon {
    position: absolute;
    width: var(--s);
    height: calc(var(--s) * 1.1547);
    font-size: initial;
    margin: var(--m);
    top: 0;
    left: 0;
    clip-path: polygon(4% 28%, 4% 73%, 50% 95%, 96% 72%, 96% 28%, 50% 4%);
    background: #ffffff;
  }
  /* .container div:nth-child(odd) {
          background: green;
      } */
  .electionengine-container::before {
    content: "";
    width: calc(var(--s) / 2 + var(--m));
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(#0000 0 calc(var(--f) - 3px), #000 0 var(--f));
  }

  h2 {
    margin: 0 auto;
    padding-bottom: 4px;
    text-align: center;
    font-size: 12px;
    font-family: "Heebo";
    color: #0c0c0c;
  }

  h2.gauteng {
    transform: translate(-165%, -560%);
  }

  .seat-wrapper.gauteng {
    transform: translate(-145%, -190%);
  }

  @media (width < 600px) {
    h2.gauteng {
      transform: translate(0%, 0%);
    }

    .seat-wrapper.gauteng {
      transform: translate(0%, 0%);
    }
  }
</style>
