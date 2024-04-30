<script>
  import { onMount } from "svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Badge,
  } from "flowbite-svelte";
  import { seats2014Data } from "$lib/load-data";

  let seats;
  onMount(async () => {
    seats = await seats2014Data();
    console.log(seats);
  });
  const oddRow = "bg-gray-800 border-b-0";
  const evenRow = "bg-gray-700 border-b-0";
</script>

<main>
  <Table color="custom" class="text-white">
    <TableHead class="bg-gray-900 text-center">
      <TableHeadCell><span class="headingColor">Party</span></TableHeadCell>
      <TableHeadCell><span class="headingColor">% Votes</span></TableHeadCell>
      <TableHeadCell
        ><span class="headingColor">Parliamentary Seats</span></TableHeadCell
      >
    </TableHead>
    <TableBody tableBodyClass="text-white font-thin text-xs text-center">
      <TableBodyRow class={oddRow}>
        <TableBodyCell>
          <img
            src="https://results.elections.org.za/dashboards/npe/app/imgs/parties/ANC.png"
            width="30"
            height="30"
            alt="ANC logo"
          />
          <span>ANC</span></TableBodyCell
        >
        <TableBodyCell
          >88% <Badge rounded color="red">Down 10%</Badge></TableBodyCell
        >
        <TableBodyCell>174 seats of 400</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class={evenRow}>
        <TableBodyCell>
          <img
            src="https://results.elections.org.za/dashboards/npe/app/imgs/parties/DA.png"
            width="30"
            height="30"
            alt="DA logo"
          /><span>DA</span></TableBodyCell
        >
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class={oddRow}>
        <TableBodyCell>
          <img
            src="https://results.elections.org.za/dashboards/npe/app/imgs/parties/EFF.png"
            width="30"
            height="30"
            alt="EFF logo"
          />EFF</TableBodyCell
        >
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</main>

<style>
  .headingColor {
    color: var(--color-white);
  }
</style>
