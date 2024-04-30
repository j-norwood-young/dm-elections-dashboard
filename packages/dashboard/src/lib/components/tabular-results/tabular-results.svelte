<script>
  import { onMount } from "svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  import {
    seats2014Data,
    seats2009Data,
    seats2019Data,
    seats2024Data,
    votes2014Data,
  } from "$lib/load-data";
  let data, mappedData, votes, seats, merged;

  onMount(async () => {
    votes = await votes2014Data();
    seats = await seats2014Data();
    console.log(votes, seats);
    //merged = votes.concat(seats);
    //console.log(merged);
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
    <TableBody tableBodyClass="text-white font-thin text-xs">
      {#if data}
        {#each data as item}
          <TableBodyRow class={oddRow}>
            <TableBodyCell>
              <img src={item.LogoUrl} width="10" height="10" alt="mina" />
              {item.Abbreviation}
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      {/if}
    </TableBody>
  </Table>
</main>

<style>
  .headingColor {
    color: var(--color-white);
  }
</style>
