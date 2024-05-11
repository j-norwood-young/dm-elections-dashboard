<script>
    // @ts-nocheck
    import { partyColor } from "@election-engine/common/colors";
    
    export let seats = [];
    export let total_seats = 0;
    export let cols = 8;
    // export let margin = 1;
    export let offset = true;

    let seatsData = [];
    let rows = 0;

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
                x++;
            }
        }
        return data;
    }

    function init() {
        rows = calculateRows();
        // console.log({rows})
        seatsData = calculateSeats();
        // console.log(seatsData);
    }
    
    init();
    $: init();

</script>

<svg viewBox="0 0 {12*cols} {12*rows}">
    {#each seatsData as seat}
        <g transform="
            translate({(offset && seat.row % 2) ? ((seat.col * 11) + 5) : (seat.col * 11)} {(offset) ? (seat.row * 9) : (seat.row * 11)})
        ">
            <svg width="12px" height="13px" viewBox="0 0 15 17">
                <g transform="translate(1, 1)" fill={seat.color} fill-rule="nonzero" stroke="#444444">
                    <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"></polygon>
                </g>
            </svg>
        </g>
    {/each}
</svg>
