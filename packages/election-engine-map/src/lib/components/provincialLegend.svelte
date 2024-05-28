<script>
    // @ts-nocheck

    export let highParty;

    let sortedPartySeats = [];

    const getUniqueParties = (data) => {
        const seenAbbreviations = new Set();

        return data.filter((item) => {
            if (seenAbbreviations.has(item?.party_abbreviation)) {
                return false;
            } else {
                seenAbbreviations.add(item?.party_abbreviation);
                return true;
            }
        });
    };

    $: sortedPartySeats = getUniqueParties(highParty.filter((p) => p));

    $: console.log({ highParty, sortedPartySeats });
</script>

<div class="legend">
    {#each sortedPartySeats as seat}
        <div class="party-wrapper">
            <svg width="12px" height="13px">
                <g
                    transform="translate(1, 1)"
                    fill={seat?.party_color || "grey"}
                    fill-rule="nonzero"
                    stroke="#444444"
                >
                    <polygon points="5,0 10,2.75 10,8.25 5,11 0,8.25 0,2.75"
                    ></polygon>
                </g>
            </svg>
            <div class="electionengine-legend-partyname">
                {seat?.party_abbreviation || "Unknown"} ({seat?.seats} seat{seat?.seats !==
                1
                    ? "s"
                    : ""})
            </div>
        </div>
    {/each}
</div>

<style>
    .legend {
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        position: absolute;
        z-index: 99;
        display: flex;
        gap: 5px;
        padding: 5px;
        margin: 10px 0px;
        border-radius: 4px;
        justify-content: flex-start;
        flex-direction: column;
    }

    .party-wrapper {
        display: flex;
        flex-direction: row;
        gap: 5px;
        justify-content: left;
        align-items: center;
        flex-shrink: 0;
    }

    .electionengine-legend-partyname {
        color: #292929;
        font-size: 10px;
        font-weight: 600;
    }
</style>
