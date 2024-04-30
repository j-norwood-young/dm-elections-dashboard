<script>
  import { onMount } from "svelte";
  import Hemicycle from "svelte-hemicycle";
  import { useMediaQuery } from "svelte-breakpoints";

  import { toggleColorScheme, decorateWithColors } from "$lib/load-colors";
  import {
    seats2014Data,
    seats2009Data,
    seats2019Data,
    seats2024Data,
  } from "$lib/load-data";
  import ResultsHeader from "$components/results-header/results-header.svelte";

  const isSmall = useMediaQuery("(max-width: 200px)");
  const isMedium = useMediaQuery("(min-width: 480px)");
  const isBigger = useMediaQuery("(min-width: 720px)");
  const isRest = useMediaQuery("(min-width: 1024px)");

  let current_party, defaultData, mappedDefaultData;
  let heading = "";

  const DEFAULT_COLOR_SCHEME = "high";

  const rows = 12;
  const display = ["points", "text"];
  const color = "black";
  const font_size = "20";
  const selectedShape = "hexagon";

  let data,
    total_seats,
    selectedScheme,
    arc,
    className,
    hcWidth,
    hcHeight,
    title,
    inputData,
    seats,
    modified;

  const manipulateHemicycle = (data) => {
    selectedScheme = toggleColorScheme(DEFAULT_COLOR_SCHEME);
    return selectedScheme && decorateWithColors(data, selectedScheme);
  };

  onMount(async () => {
    defaultData = await seats2014Data();
    mappedDefaultData = defaultData.map((party, id) => {
      return {
        id: id,
        text: party.Abbreviation,
        count: party.Seats,
      };
    });
    defaultData = manipulateHemicycle(mappedDefaultData);

    data = defaultData;
    total_seats = 400;
    heading = "2014";
  });

  $: {
    if ($isSmall) {
      arc = 360;
      className = "small";
      hcWidth = 10;
      hcHeight = 10;
    }
    if ($isMedium) {
      arc = 300;
      hcWidth = 220;
      hcHeight = 220;
    }
    if ($isBigger) {
      arc = 270;
      hcWidth = 420;
      hcHeight = 420;
    }
    if ($isRest) {
      arc = 180;
      hcWidth = 620;
      hcHeight = 620;
    }
  }

  const loadData = async (year) => {
    const calculateSeats = (arr) =>
      arr.reduce((partialSum, item) => partialSum + item.Seats, 0);
    const prepareData = (arr) =>
      arr.map((party, id) => {
        return {
          id: id,
          text: party.Abbreviation,
          count: party.Seats,
        };
      });
    switch (year) {
      case "2009":
        inputData = await seats2009Data();
        title = "2009";
        break;
      case "2014":
        inputData = await seats2014Data();
        title = "2014";
        break;
      case "2019":
        inputData = await seats2019Data();
        title = "2019";
        break;
      case "2024":
        inputData = await seats2024Data();
        title = "2024";
        break;
    }

    seats = calculateSeats(inputData);
    modified = prepareData(inputData);
    modified = manipulateHemicycle(modified);

    heading = title;
    total_seats = seats;
    data = modified;
    current_party = current_party;
  };
</script>

<h1>National Elections</h1>
<h2>Hemicycle</h2>
<div class="toggleBar default">
  <button type="button" on:click={() => loadData("2009")}>2009</button>
  <button type="button" on:click={() => loadData("2014")}>2014</button>
  <button type="button" on:click={() => loadData("2019")}>2019</button>
  <button type="button" disabled={true} title="Not available yet!">2024</button>
</div>
<div class={className} id="hemicycle">
  <Hemicycle
    bind:current_party
    {hcWidth}
    {hcHeight}
    {data}
    {rows}
    {display}
    {color}
    {font_size}
    {selectedShape}
    {arc}
    {total_seats}
  />
</div>
{#if current_party}
  <div class="partyResultsInformation">
    <p>Total Seats Count: {current_party?.count}</p>
  </div>
{/if}

<style src="./hemicycle-view.styles.css"></style>
