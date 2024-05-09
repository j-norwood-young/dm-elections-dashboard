import { partyColors, genericColors } from "@election-engine/common/color-scheme.json";

let colors = [];
for (const [party, color] of Object.entries(partyColors)) {
    colors.push({ party, color });
}

/**
 * Returns the color associated with a given party ID.
 * If the party ID is not found in the colors array, a backup color is returned based on the index.
 *
 * @param {string} partyID - The ID of the party.
 * @param {number} index - The index used to calculate the backup color.
 * @returns {string} The color associated with the party ID or a backup color.
 */
export function partyColor(partyID, index) {
    const color = colors.find((d) => partyID === d.party);
    if (color) {
        return color.color;
    }
    let backup_color = genericColors[index % genericColors.length];
    return backup_color;
}