<script>
  export let data;
</script>

<div class="tooltip-wrapper">
  <div class="container">
    <div>
      <p class="thead">Party:</p>
      <p class="tdata" style="color:{data.partyColor}">{data.partyName}</p>
    </div>
    <div>
      <p class="thead">Percentage of Seats Won in Limpopo</p>
      <div class="range-wrapper tdata">
        <div class="range">
          <div class="outer">
            <div class="inner" style="width:{data.percentage}px; background:{data.partyColor}"></div>
          </div>
        </div>
        <span> {Math.round(data.percentage)}</span>
      </div>
    </div>
    <div>
      <p class="thead">Total Number of Seats</p>
      <p class="tdata">{data.numberOfSeats}</p>
    </div>
    <div>
      <p class="thead">Total Number of Seats Won in Limpopo</p>
      <p class="tdata">{data.numberOfSeats}</p>
    </div>
    <div>
      <p class="thead">Total Votes</p>
      <p class="tdata">{data.totalVotes}</p>
    </div>
  </div>
</div>

<style>
  .tooltip-wrapper {
    position: absolute;
    top: 15%;
    left: 15%;
    background: #fffff9;
    padding: 0.55rem;
    border: 1px solid #c7c4c4;
  }

  .container > div {
    padding-bottom: 4px;
  }
  .thead {
    font-size: 11px;
    color: #999494;
  }

  .tdata {
    font-size: 13px;
    color: #2a2a2a;
    font-weight: bold;
    border-bottom: 1px solid #c7c4c4;
  }

  .range-wrapper {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
  }

  .range {
    position: relative;
    width: 100%;
    height: 12px;
  }

  .outer {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #f2f2f2;
    border-radius: 12px;
  }

  .inner {
    height: 100%;
    width: 73%;
    position: absolute;
    border-radius: inherit;
  }

  .container > div:last-child .tdata {
    border-bottom: none;
  }
</style>
