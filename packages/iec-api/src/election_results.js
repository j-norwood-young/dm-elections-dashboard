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

export async function electoralEvents(eventTypeID) {
    const electoralEvents = await iec.electoralEvents(eventTypeID);
    return electoralEvents;
}

export async function contestingParties(eventID) {
    const parties = await iec.contestingParties(eventID);
    return parties;
}

export async function results(eventID) {
    const results = await iec.NPEBallotResults(eventID);
    return results;
}

export async function seats(eventID) {
    const seats = await iec.NPESeatCalculationResults(eventID);
    return seats;
}

export async function provinces(eventID) {
    const provinces = await iec.delimitations(eventID);
    return provinces;
}

export async function municipalities(eventID, provinceID) {
    const municipalities = await iec.delimitationsProvince(eventID, provinceID);
    return municipalities;
}

export async function votesByProvince(eventID, provinceID) {
    const votes = await iec.NPEBallotResultsProvince(eventID, provinceID);
    return votes;
}

export async function votesByMunicipality(eventID, provinceID, municipalityID) {
    const votes = await iec.NPEBallotResultsMunicipality(eventID, provinceID, municipalityID);
    return votes;
}

export async function seatsByProvince(eventID, provinceID) {
    const seats = await iec.NPESeatCalculationResultsProvince(eventID, provinceID);
    return seats;
}

export async function progress(eventID) {
    const progress = await iec.electoralEventResultsProgress(eventID);
    return progress;
}

export async function progressByProvince(eventID, provinceID) {
    const progress = await iec.electoralEventResultsProgressProvince(eventID, provinceID);
    return progress;
}