
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { getCache, setCache } from './cache.js';
import * as ElectionResults from './election_results.js';
import years from "@election-engine/common/years.json"
import provinces from "@election-engine/common/provinces.json"

const YEARS = years;
const PROVINCES = provinces;

export const server = Fastify({
    logger: true
})

server.register(cors, {
    origin: "*"
});

server.get('/', async (req, res) => {
    res.send({ msg: 'Hello, world!' });
});

server.get("/electoral_types", async (req, res) => {
    let electoralTypes = await getCache("electoral_types");
    if (!electoralTypes) {
        electoralTypes = await ElectionResults.electoralTypes();
        setCache("electoral_types", electoralTypes);
    }
    res.send(electoralTypes);
});

server.get("/electoral_events/:eventTypeID", async (req, res) => {
    const eventTypeID = req.params.eventTypeID;
    let electoralEvents = await getCache(`electoral_events_${eventTypeID}`);
    if (!electoralEvents) {
        electoralEvents = await ElectionResults.electoralEvents(eventTypeID);
        setCache(`electoral_events_${eventTypeID}`, electoralEvents);
    }
    res.send(electoralEvents);
});

server.get("/provinces/:eventID", async (req, res) => {
    const eventID = req.params.eventID;
    let provinces = await getCache(`provinces_${eventID}`);
    if (!provinces) {
        provinces = await ElectionResults.provinces(eventID);
        setCache(`provinces_${eventID}`, provinces);
    }
    res.send(provinces);
})

server.get("/contesting_parties/:eventID", async (req, res) => {
    const eventID = req.params.eventID;
    let parties = await getCache(`contesting_parties_${eventID}`);
    if (!parties) {
        parties = await ElectionResults.contestingParties(eventID);
        setCache(`contesting_parties_${eventID}`, parties);
    }
    res.send(parties);
});

server.get("/results/:eventID", async (req, res) => {
    const eventID = req.params.eventID;
    let results = await getCache(`results_${eventID}`);
    if (!results) {
        results = await ElectionResults.results(eventID);
        setCache(`results_${eventID}`, results);
    }
    res.send(results);
});

server.get("/seats/:eventID", async (req, res) => {
    const eventID = req.params.eventID;
    let seats = await getCache(`seats_${eventID}`);
    if (!seats) {
        seats = await ElectionResults.seats(eventID);
        setCache(`seats_${eventID}`, seats);
    }
    res.send(seats);
});

const resultsData = async (year) => {
    const electoral_types = await getCache("electoral_types");
    const national_election = electoral_types.find((et) => et.Description === "National Election");
    if (!national_election) {
        throw ("National Election not found")
    }
    const electoral_events = await getCache(`electoral_events_${national_election.ID}`);
    const national_event = electoral_events.find((ee) => ee.Description.includes(year));
    if (!national_event) {
        throw(`National Election for year ${year} not found`);
    }
    let parties = await getCache(`contesting_parties_${national_event.ID}`);
    if (!parties) {
        throw(`Parties for National Election for year ${year} not found`);
    }
    const provinces = await getCache(`provinces_${national_event.ID}`);
    if (!provinces) {
        throw(`Provinces for National Election for year ${year} not found`);
    }
    return {
        national_event,
        parties,
        provinces
    };
}

server.get("/results/seats/national/:year", async (req, res) => {
    const year = parseInt(req.params.year);
    if (!year) {
        return res.status(412).send({ status: "error", msg: "Year is required" })
    }
    if (!YEARS.includes(year)) {
        return res.status(412).send({ status: "error", msg: `Year must be one of ${YEARS.join(", ")}` });
    }
    const {national_event, parties} = await resultsData(year);
    let seats = await getCache(`seats_${national_event.ID}`);
    if (!seats) {
        return res.status(404).send({ status: "error", msg: `Seats for National Election for year ${year} not found` });
    }
    const PartyResults = seats.PartyResults
        .filter((pr) => pr.Overall > 0)
        .map((pr) => {
            const party = parties.find((p) => p.Name === pr.Name);
            return {
                Name: pr.Name,
                LogoUrl: `https://results.elections.org.za/dashboards/npe/app/imgs/parties/${party.LogoUrl.replace(/jpg$/, "png")}`,
                Abbreviation: party.Abbreviation,
                Seats: pr.Overall
            };
        })
        .sort((a, b) => b.Seats - a.Seats);
    res.send({PartyResults});
});

server.get("/results/seats/national/:year/:province", async (req, res) => {
    const year = parseInt(req.params.year);
    console.log(year)
    if (!year) {
        return res.status(412).send({ status: "error", msg: "Year is required" })
    }
    if (!YEARS.includes(year)) {
        return res.status(412).send({ status: "error", msg: `Year must be one of ${YEARS.join(", ")}` });
    }
    const province = req.params.province;
    if (!province) {
        return res.status(412).send({ status: "error", msg: "Province is required" })
    }
    if (!PROVINCES.includes(province)) {
        return res.status(412).send({ status: "error", msg: `Province must be one of ${PROVINCES.join(", ")}` });
    }
    const {national_event, provinces, parties} = await resultsData(year);
    const province_id = provinces.find((p) => p.Province === province).ProvinceID;
    let seats = null;
    // let seats = await getCache(`seats_${national_event.ID}_${province}`);
    if (!seats) {
        seats = await ElectionResults.seatsByProvince(national_event.ID, province_id);
        await setCache(`seats_${national_event.ID}_${province}`, seats);
    }
    if (!seats) {
        return res.status(404).send({ status: "error", msg: `Seats for National Election for province ${province} for year ${year} not found` });
    }
    const PartyResults = seats.PartyResults
        .filter((pr) => pr.NumberOfSeats > 0)
        .map((pr) => {
            const party = parties.find((p) => p.Name === pr.Name);
            return {
                Name: pr.Name,
                LogoUrl: `https://results.elections.org.za/dashboards/npe/app/imgs/parties/${party.LogoUrl.replace(/jpg$/, "png")}`,
                Abbreviation: party.Abbreviation,
                Seats: pr.NumberOfSeats
            };
        })
        .sort((a, b) => b.Seats - a.Seats);
    res.send({PartyResults});
})

server.get("/results/votes/national/:year", async (req, res) => {
    const year = parseInt(req.params.year);
    if (!year) {
        return res.status(412).send({ status: "error", msg: "Year is required" })
    }
    if (!YEARS.includes(year)) {
        return res.status(412).send({ status: "error", msg: `Year must be one of ${YEARS.join(", ")}` });
    }
    const {national_event, parties} = await resultsData(year);
    const provinces = await getCache(`provinces_${national_event.ID}`);
    const result = [];
    for (const province of provinces) {
        const province_results = await getCache(`votes_${national_event.ID}_${province.ProvinceID}`);
        if (!province_results) {
            return res.status(404).send({ status: "error", msg: `Province Votes for National Election for province ${province.Name} for year ${year} not found` });
        }
        const seat_results = await getCache(`seats_${national_event.ID}_${province.ProvinceID}`);
        if (!seat_results) {
            return res.status(404).send({ status: "error", msg: `Province Seats for National Election for province ${province.Name} for year ${year} not found` });
        }
        province_results.PartyBallotResults = province_results.PartyBallotResults
            .filter((pr) => pr.PercOfVotes > 0.1)
            .map((pr) => {
                const party = parties.find((p) => p.Name === pr.Name);
                const seats = seat_results.PartyResults.find((sr) => sr.Name === pr.Name);
                return {
                    Name: pr.Name,
                    LogoUrl: `https://results.elections.org.za/dashboards/npe/app/imgs/parties/${party.LogoUrl.replace(/jpg$/, "png")}`,
                    Abbreviation: party.Abbreviation,
                    Votes: pr.ValidVotes,
                    Percentage: pr.PercOfVotes,
                    BallotType: pr.BallotType,
                    IsIndependent: pr.bIsIndependent,
                    NumberOfSeats: seats?.NumberOfSeats || 0
                };
            })
            .sort((a, b) => b.Votes - a.Votes);
        result.push(province_results);
    }
    res.send(result);
});

server.get("/data/:election/:region/:year", async (req, res) => {
    const { election, region, year } = req.params;
    if (!election) {
        return res.status(412).send({ status: "error", msg: "Election is required" })
    }
    if (!region) {
        return res.status(412).send({ status: "error", msg: "Region is required" })
    }
    if (!year) {
        return res.status(412).send({ status: "error", msg: "Year is required" })
    }
    if (!YEARS.includes(year)) {
        return res.status(412).send({ status: "error", msg: `Year must be one of ${YEARS.join(", ")}` });
    }
    if (!["National Assembly", "Provincial Legislature"].includes(election)) {
        return res.status(412).send({ status: "error", msg: `Election must be one of "National Assembly", "Provincial Legislature"` });
    }
    if (!PROVINCES.includes(region)) {
        return res.status(412).send({ status: "error", msg: `Region must be one of ${PROVINCES.join(", ")}` });
    }

})