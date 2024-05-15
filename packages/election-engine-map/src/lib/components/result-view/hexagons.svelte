<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import GautengLinePath from "../gautengLinePath.svelte";
    import { partyColor } from "@election-engine/common/colors";

    export let seats = [];
    export let total_seats = 0;
    export let cols = 8;
    // export let margin = 1;
    export let offset = true;
    export let grid;
    export let node;
    export let tooltipData;

    let seatsData = [];
    let rows = 0;
    let seatHexagon;

    $: isGauteng = node.provinceID === "Gauteng" ? true : false;

    function calculateRows() {
        return Math.ceil(total_seats / cols);
    }

    function calculateSeats() {
        let data = [];
        for (let i = 0; i < total_seats; i++) {
            const d = {
                i,
                party: {},
                color: "#FFFFFF",
                row: Math.floor(i / cols),
                col: i % cols,
            };
            data.push(d);
        }
        let x = 0;
        for (let seat of seats) {
            for (let j = 0; j < seat.NumberOfSeats; j++) {
                data[x].party = seat;
                data[x].color = partyColor(seat.Abbreviation, x);
                data[x].cord_x = node.x;
                data[x].cord_y = node.y;
                data[x].total_seats = total_seats;
                x++;
            }
        }
        return data;
    }

    function init() {
        rows = calculateRows();
        // console.log({rows})
        seatsData = calculateSeats();
    }

    onMount(async () => {
        let cord = seatHexagon.getBoundingClientRect();
        for (let x of seatsData) {
            x.x = cord.x;
            x.y = cord.y;
        }
    });

    init();
    $: init();

    //console.log(seats);
    $: console.log(seatsData);
</script>

{#if node.provinceID === "Gauteng" || node.provinceID === "KwaZulu-Natal"}
    <div class="electionengine-pr-head" class:gauteng-heading={isGauteng}>
        {node.provinceID}
    </div>
{/if}

{#if isGauteng && !grid}
    <GautengLinePath />
{/if}

<svg
    viewBox="0 0 {12 * cols} {12 * rows}"
    class="electionengine-seatwrapper"
    class:gauteng={isGauteng}
    width="140"
    height="100"
    on:mouseleave={() => (tooltipData = null)}
    role="img"
>
    <text dx="15" dy="-4" base>{node.provinceID}</text>
    <svg viewBox="0 0 {12 * cols} {12 * rows}">
        {#each seatsData as seat}
            <g
                transform="
                  translate({offset && seat.row % 2
                    ? seat.col * 11 + 5
                    : seat.col * 11} {offset ? seat.row * 9 : seat.row * 11})
              "
            >
                <svg
                    bind:this={seatHexagon}
                    width="12px"
                    height="13px"
                    viewBox="0 0 15 17"
                    on:mouseover={() => (tooltipData = seat)}
                    on:focus
                    role="img"
                >
                    <g
                        transform="translate(1, 1)"
                        fill={seat.color}
                        fill-rule="nonzero"
                        stroke="#444444"
                    >
                        <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"
                        ></polygon>
                    </g>
                </svg>
            </g>
        {/each}
    </svg>
</svg>

<style>
    text {
        margin: 0 auto;
        padding-bottom: 4px;
        text-align: center;
        font-size: 8px;
        font-weight: 600;
        font-family: "Heebo";
        color: #0c0c0c;
    }

    .electionengine-pr-head {
        margin: 0 auto;
        font-size: 12px;
        font-weight: 600;
        font-family: "Heebo";
        color: #0c0c0c;
        text-align: center;
    }

    .electionengine-pr-head.gauteng-heading {
        transform: translate(-100%, -740%);
        text-align: unset;
    }

    .electionengine-seatwrapper.gauteng {
        transform: translate(-125%, -125%);
    }

    @media (width < 630px) {
        .electionengine-pr-head.gauteng-heading {
            transform: translate(0%, 0%);
            text-align: center;
        }

        .electionengine-seatwrapper.gauteng {
            transform: translate(0%, 0%);
        }
    }
</style>
