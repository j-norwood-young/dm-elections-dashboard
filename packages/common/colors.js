import { partyColors, genericColors } from "@election-engine/common/color-scheme.json";

let colors = [];
for (const [party, color] of Object.entries(partyColors)) {
    colors.push({ party, color });
}

export function partyColor(partyID, index) {
    const color = colors.find((d) => partyID === d.party);
    if (color) {
        return color.color;
    }
    let backup_color = genericColors[index % genericColors.length];
    return backup_color;
}