import { heatCache } from "../src/heat_cache"
import { setupRedis, clearCache, closeRedis, getCache } from "../src/cache"

describe("Heat Cache", () => {
    // beforeAll(async () => {
    //     await setupRedis();
    //     await clearCache();
    // });
    // afterAll(async () => {
    //     await closeRedis();
    // });
    test("Heat Cache", async () => {
        // await heatCache();
        let electoralTypes = await getCache("electoral_types");
        expect(electoralTypes).not.toBeNull();
        expect(electoralTypes.length).toEqual(4);
        let national_election = electoralTypes.find((et: any) => et.Description === "National Election");
        let electoralEvents = await getCache(`electoral_events_${national_election.ID}`);
        expect(electoralEvents.length).toBeGreaterThan(4);
        const electoral_event_id = electoralEvents[0].ID;
        let provinces = await getCache(`provinces_${electoral_event_id}`);
        expect(provinces.length).toBe(10);
        let parties = await getCache(`contesting_parties_${electoral_event_id}`);
        expect(parties.length).toBeGreaterThan(10);
        let results = await getCache(`results_${electoral_event_id}`);
        expect(results.PartyBallotResults.length).toBeGreaterThan(10);
        let seats = await getCache(`seats_${electoral_event_id}`);
        expect(seats.PartyResults.length).toBeGreaterThan(10);
        let votes = await getCache(`votes_${electoral_event_id}_${provinces[0].ProvinceID}`);
        expect(votes.PartyBallotResults.length).toBeGreaterThan(10);
    }, 30000);
})