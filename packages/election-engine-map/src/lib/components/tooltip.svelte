<script>
  import { numberWithCommas } from "../libs/utils";
  export let data;
</script>

<div class="electionengine-tooltip-wrapper" style="top:{60}px; left:{20}px">
  <div class="electionengine-tooltip-container">
    <div>
      <div class="electionengine-partyname-wrapper">
        <div class="electionengine-partyrectcolor" style="background: {data.color};"></div>
        <p class="electionengine-tooltip-thead">Party:</p>
      </div>
      <p class="electionengine-tooltip-tdata">{data.party.Name}</p>
    </div>
    <div>
      <p class="electionengine-tooltip-thead">Percentage of Seats Won in Limpopo</p>
      <div class="electionengine-tooltip-range-wrapper electionengine-tooltip-tdata">
        <div class="electionengine-tooltip-range">
          <div class="electionengine-tooltip-outer">
            <div
              class="electionengine-tooltip-inner"
              style="width:{data.party.Percentage}%; background:{data.color}"
            ></div>
          </div>
        </div>
        <span> {Math.round(data.party.Percentage)}%</span>
      </div>
    </div>
    <div>
      <p class="electionengine-tooltip-thead">Total Number of Seats Won in Limpopo</p>
      <p class="electionengine-tooltip-tdata">{data.party.NumberOfSeats} / {data.total_seats}</p>
    </div>
    <div>
      <p class="electionengine-tooltip-thead">Total Votes</p>
      <p class="electionengine-tooltip-tdata">{numberWithCommas(data.party.Votes)}</p>
    </div>
  </div>
</div>

<style>
  .electionengine-tooltip-wrapper {
    width: 200px;
    position: absolute;
    background: #fffff9;
    padding: 0.55rem;
    border: 1px solid #c7c4c4;
  }

  .electionengine-tooltip-container > div {
    padding-bottom: 4px;
  }
  .electionengine-tooltip-thead {
    font-size: 11px;
    color: #999494;
  }

  .electionengine-tooltip-tdata {
    font-size: 13px;
    color: #2a2a2a;
    font-weight: bold;
    border-bottom: 1px solid #c7c4c4;
  }

  .electionengine-tooltip-range-wrapper {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
  }

  .electionengine-tooltip-range {
    position: relative;
    width: 100%;
    height: 12px;
  }

  .electionengine-tooltip-outer {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #f2f2f2;
    border-radius: 12px;
  }

  .electionengine-tooltip-inner {
    height: 100%;
    width: 73%;
    position: absolute;
    border-radius: inherit;
  }

  .electionengine-partyname-wrapper {
    display: flex;
    gap: 6px;
    justify-content: start;
    align-items: center;
  }

  .electionengine-partyrectcolor {
    width: 10px;
    height: 10px;
  }

  .electionengine-tooltip-container > div:last-child .electionengine-tooltip-tdata {
    border-bottom: none;
  }
</style>
