<script>
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
                color: "#D8D8D8",
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
                console.log(data[x].color)
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
            translate({(offset && seat.row % 2) ? ((seat.col * 11) + 5) : (seat.col * 11)} {(offset && seat.row % 2) ? (seat.row * 11) - 3 : (seat.row * 11)})
        ">
            <svg width="12px" height="13px" viewBox="0 0 15 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Group" transform="translate(1, 1)" fill={seat.color} fill-rule="nonzero" stroke="#444444">
                        <polygon id="Polygon" points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"></polygon>
                    </g>
                </g>
            </svg>
        </g>
    {/each}
</svg>
