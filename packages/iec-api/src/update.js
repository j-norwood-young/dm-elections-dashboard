import cron from 'node-cron';
import * as ElectionResults from "./election_results.js";
import { setCache, getCache } from "./cache.js";
import { heatCache } from './heat_cache.js';
import assert from "assert";

const NATIONAL_EVENT_ID = 1334;
const PROVINCIAL_EVENT_ID = 1335;

async function update_national_votes() {
    const vote_results = await ElectionResults.results(NATIONAL_EVENT_ID);
    assert((vote_results.VDCount), "Invalid vote results.")
    assert((vote_results.PartyBallotResults?.length), "Invalid vote results.")
    await setCache(`national_votes_${NATIONAL_EVENT_ID}`, vote_results);
    console.log("National votes updated.");
}

async function update_national_seats() {
    const seat_results = await ElectionResults.seats(NATIONAL_EVENT_ID);
    assert(seat_results.ElectoralEventID === NATIONAL_EVENT_ID, "Invalid seat results.");
    assert((seat_results.PartyResults?.length), "Invalid seat results.")
    await setCache(`national_seats_${NATIONAL_EVENT_ID}`, seat_results);
    console.log("National seats updated.");
}

async function update_national_votes_by_province() {
    const provinces = await getCache(`provinces_${NATIONAL_EVENT_ID}`); // This should probably be handled centrally
    for (let province of provinces) {
        try {
            const votes = await ElectionResults.votesByProvince(NATIONAL_EVENT_ID, province.ProvinceID);
            assert(votes.ElectoralEventID === NATIONAL_EVENT_ID, "Invalid vote results.");
            assert(votes.PartyBallotResults.length > 0, votes.PartyBallotResults.length);
            await setCache(`national_votes_${NATIONAL_EVENT_ID}_${province.ProvinceID}`, votes);
        } catch (e) {
            handle_error(e);
        }
    }
    console.log("National votes by province updated.");
}

async function update_national_seats_by_province() {
    const provinces = await getCache(`provinces_${NATIONAL_EVENT_ID}`); // This should probably be handled centrally
    for (let province of provinces) {
        try {
            const seats = await ElectionResults.seatsByProvince(NATIONAL_EVENT_ID, province.ProvinceID);
            assert(seats.ElectoralEventID === NATIONAL_EVENT_ID, "Invalid seat results.");
            assert(seats.PartyResults.length > 0, seats.PartyResults.length);
            await setCache(`national_seats_${NATIONAL_EVENT_ID}_${province.ProvinceID}`, seats);
        } catch (e) {
            handle_error(e);
        }
    }
    console.log("National seats by province updated.");
}

async function update_provincial_votes_by_province() {
    const provinces = await getCache(`provinces_${PROVINCIAL_EVENT_ID}`);
    for (let province of provinces) {
        try {
            const votes = await ElectionResults.votesByProvince(PROVINCIAL_EVENT_ID, province.ProvinceID);
            assert(votes.ElectoralEventID === PROVINCIAL_EVENT_ID, "Invalid vote results.");
            assert(votes.PartyBallotResults.length > 0, votes.PartyBallotResults.length);
            await setCache(`provincial_votes_${PROVINCIAL_EVENT_ID}_${province.ProvinceID}`, votes);
        } catch (e) {
            handle_error(e);
        }
    }
    console.log("Provincial votes by province updated.");
}

async function update_provincial_seats_by_province() {
    const provinces = await getCache(`provinces_${PROVINCIAL_EVENT_ID}`);
    for (let province of provinces) {
        try {
            const seats = await ElectionResults.seatsByProvince(PROVINCIAL_EVENT_ID, province.ProvinceID);
            assert(seats.ElectoralEventID === PROVINCIAL_EVENT_ID, "Invalid seat results.");
            assert(seats.PartyResults.length > 0, seats.PartyResults.length);
            await setCache(`provincial_seats_${PROVINCIAL_EVENT_ID}_${province.ProvinceID}`, seats);
        } catch (e) {
            handle_error(e);
        }
    }
    console.log("Provincial seats by province updated.");
}

const getMunicipalities = async (eventID, provinceID) => {
    let municipalities = await getCache(`municipalities_${eventID}_${provinceID}`);
    if (!municipalities) {
        municipalities = await ElectionResults.municipalities(eventID, provinceID);
        await setCache(`municipalities_${eventID}_${provinceID}`, municipalities);
    }
    return municipalities;
}

async function update_municipal_votes_by_province() {
    const provinces = await getCache(`provinces_${PROVINCIAL_EVENT_ID}`);
    for (let province of provinces) {
        const municipalities = await getMunicipalities(PROVINCIAL_EVENT_ID, province.ProvinceID);
        for (let municipality of municipalities) {
            try {
                console.log(`Updating ${`municipal_votes_${PROVINCIAL_EVENT_ID}_${province.ProvinceID}_${municipality.MunicipalityID}`}`)
                const votes = await ElectionResults.votesByMunicipality(PROVINCIAL_EVENT_ID, province.ProvinceID, municipality.MunicipalityID);
                assert(votes.ElectoralEventID === PROVINCIAL_EVENT_ID, "Invalid vote results.");
                assert(votes.PartyBallotResults.length > 0, votes.PartyBallotResults.length);
                await setCache(`municipal_votes_${PROVINCIAL_EVENT_ID}_${province.ProvinceID}_${municipality.MunicipalityID}`, votes);
            } catch (e) {
                handle_error(e);
            }
        }
    }
    console.log("Provincial votes by province updated.");
}

async function update_progress() {
    const progress = await ElectionResults.progress(NATIONAL_EVENT_ID);
    assert(progress.VDTotal > 0, "Invalid progress results.");
    await setCache(`progress_${NATIONAL_EVENT_ID}`, progress);
    console.log("Progress updated.");
}

function handle_error(e) {
    console.error(e);
}

export async function update() {
    cron.schedule('*/5 * * * *', async () => {
        console.time("update");
        await heatCache([NATIONAL_EVENT_ID, PROVINCIAL_EVENT_ID]);
        await update_national_votes().catch(handle_error);
        await update_national_seats().catch(handle_error);
        await update_national_votes_by_province().catch(handle_error);
        await update_national_seats_by_province().catch(handle_error);
        await update_provincial_votes_by_province().catch(handle_error);
        await update_provincial_seats_by_province().catch(handle_error);
        await update_municipal_votes_by_province().catch(handle_error);
        console.timeEnd("update");
    });
    cron.schedule('* * * * *', async () => {
        await heatCache([NATIONAL_EVENT_ID, PROVINCIAL_EVENT_ID]);
        await update_progress().catch(handle_error);
    });
}

update();