import dotenv from "dotenv"
import { IEC } from 'iec-za';

dotenv.config();

if (!process.env.IEC_USERNAME || !process.env.IEC_PASSWORD) {
    throw new Error("IEC_USERNAME and IEC_PASSWORD must be set in the environment")
}

const iec = new IEC();

export async function electoralTypes() {
    const electoralTypes = await iec.electoralEventTypes();
    return electoralTypes;
}

export async function electoralEvents(eventTypeID: number) {
    const electoralEvents = await iec.electoralEvents(eventTypeID);
    return electoralEvents;
}

export async function contestingParties(eventID: number) {
    const parties = await iec.contestingParties(eventID);
    return parties;
}

export async function results(eventID: number) {
    const results = await iec.NPEBallotResults(eventID);
    return results;
}

export async function seats(eventID: number) {
    const seats = await iec.NPESeatCalculationResults(eventID);
    return seats;
}

export async function provinces(eventID: number) {
    const provinces = await iec.delimitations(eventID);
    return provinces;
}

export async function votesByProvince(eventID: number, provinceID: number) {
    const votes = await iec.NPEBallotResultsProvince(eventID, provinceID);
    return votes;
}