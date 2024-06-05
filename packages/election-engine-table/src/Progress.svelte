<script>
    import Range from "@election-engine/map/src/lib/components/range.svelte";
    export let data;
</script>

<!-- <h4>
    {data
        ? `${Math.round(
              (data.vd_captured / data.vd_count) * 100
          )}%  voting districts counted`
        : ""}
</h4>
<div style="max-width: 200px; margin: 5px auto 20px auto;">
    <Range
        max={data.vd_count}
        value={data.vd_captured}
        show_percentage={false}
    />
</div> -->
<h4>
    {((data.total_votes_cast / data.registered_voters) * 100).toFixed(1)}% {data.vd_captured ===
    data.vd_count
        ? `turnout`
        : `votes of registered voters have been counted`}
</h4>
<div style="max-width: 200px; margin: 5px auto 20px auto;">
    <Range
        max={data.registered_voters}
        value={data.total_votes_cast}
        show_percentage={false}
        color="rgb(236 137 100)"
    />
</div>

<style>
    h4 {
        text-align: center;
    }
</style>
