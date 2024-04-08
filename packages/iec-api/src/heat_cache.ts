import * as ElectionResults from "./election_results";
import { setCache } from "./cache";

export async function heatCache(years: string[] = ["2019", "2014"], type: string = "National Election") {
    const electoralTypes = await ElectionResults.electoralTypes();
    expect(electoralTypes.length).toEqual(4);
    await setCache("electoral_types", electoralTypes);
    const national_election = electoralTypes.find((et: any) => et.Description === type);
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