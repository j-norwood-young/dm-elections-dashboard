import * as ElectionResults from "./election_results.js";
import { setCache } from "./cache.js";
import assert from "assert";
import YEARS from "@election-engine/common/years.json" with { type: "json" };

/**
 * Caches electoral data for specified years and election type.
 * @param {string[]} years - The years for which to cache the data.
 * @param {string} type - The type of election to cache.
 * @throws {Error} If electoral types for the specified type are not found.
 * @throws {Error} If events for the specified type are not found.
 */
export async function heatCache(years = YEARS, electoral_event_types = [1, 2]) {
    const electoralTypes = await ElectionResults.electoralTypes();
    assert(electoralTypes.length === 4);
    await setCache("electoral_types", electoralTypes);
    for (let eetype of electoral_event_types) {
        console.log(`Caching data for ${eetype}`);
        const electoral_events = await ElectionResults.electoralEvents(eetype);
        if (!electoral_events) {
            throw new Error(`Events for ${eetype} not found`);
        }
        await setCache(`electoral_events_${eetype}`, electoral_events);
        for (const ee of electoral_events) {
            if (!years.some((year) => ee.Description.includes(year))) {
                continue;
            }
            console.log(`Caching data for ${ee.Description}`);
            const provinces = await ElectionResults.provinces(ee.ID);
            await setCache(`provinces_${ee.ID}`, provinces);
        }
        console.log(`Data for ${eetype} cached.`)
    }
    console.log("Cache is hot!");
}