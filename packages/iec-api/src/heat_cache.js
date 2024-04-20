import * as ElectionResults from "./election_results.js";
import { setCache } from "./cache.js";
import assert from "assert";

/**
 * Caches electoral data for specified years and election type.
 * @param {string[]} years - The years for which to cache the data.
 * @param {string} type - The type of election to cache.
 * @throws {Error} If electoral types for the specified type are not found.
 * @throws {Error} If events for the specified type are not found.
 */
export async function heatCache(years = ["2019", "2014"], type = "National Election") {
    const electoralTypes = await ElectionResults.electoralTypes();
    assert(electoralTypes.length === 4);
    await setCache("electoral_types", electoralTypes);
    const national_election = electoralTypes.find((et) => et.Description === type);
    if (!national_election) {
        throw new Error(`Electoral types for ${type} not found`);
    }
    const electoralEvents = await ElectionResults.electoralEvents(national_election.ID);
    if (!electoralEvents) {
        throw new Error(`Events for ${type} not found`);
    }
    await setCache(`electoral_events_${national_election.ID}`, electoralEvents);
    for (const ee of electoralEvents) {
        if (!years.some((year) => ee.Description.includes(year))) {
            return;
        }
        const provinces = await ElectionResults.provinces(ee.ID);
        await setCache(`provinces_${ee.ID}`, provinces);
        const parties = await ElectionResults.contestingParties(ee.ID);
        await setCache(`contesting_parties_${ee.ID}`, parties);
        const results = await ElectionResults.results(ee.ID);
        await setCache(`results_${ee.ID}`, results);
        const seats = await ElectionResults.seats(ee.ID);
        await setCache(`seats_${ee.ID}`, seats);
        for (let province of provinces) {
            // console.log(province)
            const votes = await ElectionResults.votesByProvince(ee.ID, province.ProvinceID);
            // console.log(votes)
            await setCache(`votes_${ee.ID}_${province.ProvinceID}`, votes);
        }
    }
}