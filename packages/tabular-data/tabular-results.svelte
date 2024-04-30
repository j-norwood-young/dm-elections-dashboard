<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
</script>

<main>
  <Table color="custom" class="text-white">
    <TableHead class="bg-gray-900">
      <TableHeadCell><span class="headingColor">Party</span></TableHeadCell>
      <TableHeadCell><span class="headingColor">% Votes</span></TableHeadCell>
      <TableHeadCell
        ><span class="headingColor">Parliamentary Seats</span></TableHeadCell
      >
    </TableHead>
    <TableBody tableBodyClass="text-white font-thin text-xs">
      <TableBodyRow class="bg-gray-800 border-b-0">
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="bg-gray-700 border-b-0">
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="bg-gray-800 border-b-0">
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="bg-gray-700 border-b-0">
        <TableBodyCell>Google Pixel Phone</TableBodyCell>
        <TableBodyCell>Gray</TableBodyCell>
        <TableBodyCell>Phone</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="bg-gray-800 border-b-0">
        <TableBodyCell>Apple Watch 5</TableBodyCell>
        <TableBodyCell>Red</TableBodyCell>
        <TableBodyCell>Wearables</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</main>

<style>
  .headingColor {
    color: var(--color-white);
  }
</style>
