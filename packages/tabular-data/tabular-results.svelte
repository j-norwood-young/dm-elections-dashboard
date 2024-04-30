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
    <TableHead class="bg-gray-900 text-center">
      <TableHeadCell><span class="headingColor">Party</span></TableHeadCell>
      <TableHeadCell><span class="headingColor">% Votes</span></TableHeadCell>
      <TableHeadCell
        ><span class="headingColor">Parliamentary Seats</span></TableHeadCell
      >
    </TableHead>
    <TableBody tableBodyClass="text-white font-thin text-xs">
      <TableBodyRow class="bg-gray-800 border-b-0"></TableBodyRow>
      <TableBodyRow class="bg-gray-700 border-b-0"></TableBodyRow>
      <TableBodyRow class="bg-gray-800 border-b-0"></TableBodyRow>
      <TableBodyRow class="bg-gray-700 border-b-0"></TableBodyRow>
      <TableBodyRow class="bg-gray-800 border-b-0"></TableBodyRow>
    </TableBody>
  </Table>
</main>

<style>
  .headingColor {
    color: var(--color-white);
  }
</style>
