
import restify from 'restify';
import restifyErrors from 'restify-errors';
import dotenv from 'dotenv';
import { getCache, setCache } from './cache';
import * as ElectionResults from './election_results';

dotenv.config();

export const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.get('/', async (req, res, next) => {
    res.send({ msg: 'Hello, world!' });
    next();
});

server.get("/electoral_types", async (req, res, next) => {
    let electoralTypes = await getCache("electoral_types");
    if (!electoralTypes) {
        electoralTypes = await ElectionResults.electoralTypes();
        setCache("electoral_types", electoralTypes);
    }
    res.send(electoralTypes);
    next();
});

server.get("/electoral_events/:eventTypeID", async (req, res, next) => {
    const eventTypeID = req.params.eventTypeID;
    let electoralEvents = await getCache(`electoral_events_${eventTypeID}`);
    if (!electoralEvents) {
        electoralEvents = await ElectionResults.electoralEvents(eventTypeID);
        setCache(`electoral_events_${eventTypeID}`, electoralEvents);
    }
    res.send(electoralEvents);
    next();
});

server.get("/provinces/:eventID", async (req, res, next) => {
    const eventID = req.params.eventID;
    let provinces = await getCache(`provinces_${eventID}`);
    if (!provinces) {
        provinces = await ElectionResults.provinces(eventID);
        setCache(`provinces_${eventID}`, provinces);
    }
    res.send(provinces);
    next();
})

server.get("/contesting_parties/:eventID", async (req, res, next) => {
    const eventID = req.params.eventID;
    let parties = await getCache(`contesting_parties_${eventID}`);
    if (!parties) {
        parties = await ElectionResults.consetingParties(eventID);
        setCache(`contesting_parties_${eventID}`, parties);
    }
    res.send(parties);
    next();
});

server.get("/results/:eventID", async (req, res, next) => {
    const eventID = req.params.eventID;
    let results = await getCache(`results_${eventID}`);
    if (!results) {
        results = await ElectionResults.results(eventID);
        setCache(`results_${eventID}`, results);
    }
    res.send(results);
    next();
});

server.get("/seats/:eventID", async (req, res, next) => {
    const eventID = req.params.eventID;
    let seats = await getCache(`seats_${eventID}`);
    if (!seats) {
        seats = await ElectionResults.seats(eventID);
        setCache(`seats_${eventID}`, seats);
    }
    res.send(seats);
    next();
});

server.get("/seats/national/:year", async (req, res, next) => {
    const year = req.params.year;
    const electoral_types = await getCache("electoral_types");
    const national_election = electoral_types.find((et: any) => et.Description === "National Election");
    if (!national_election) {
        return next(new restifyErrors.NotFoundError("National Election not found"));
    }
    const electoral_events = await getCache(`electoral_events_${national_election.ID}`);
    const national_event = electoral_events.find((ee: any) => ee.Description.includes(year));
    if (!national_event) {
        return next(new restifyErrors.NotFoundError(`National Election for year ${year} not found`));
    }
    let parties = await getCache(`contesting_parties_${national_event.ID}`);
    if (!parties) {
        return next(new restifyErrors.NotFoundError(`Parties for National Election for year ${year} not found`));
    }
    let seats = await getCache(`seats_${national_event.ID}`);
    if (!seats) {
        return next(new restifyErrors.NotFoundError(`Seats for National Election for year ${year} not found`));
    }
    
    const partyResults = seats.PartyResults
        .filter((pr: { Overall: number; }) => pr.Overall > 0)
        .map((pr: { Name: string; Overall: any; }) => {
            const party = parties.find((p: { Name: string; }) => p.Name === pr.Name);
            return {
                Name: pr.Name,
                LogoUrl: `https://results.elections.org.za/dashboards/npe/app/imgs/parties/${party.LogoUrl.replace(/jpg$/, "png")}`,
                Abbreviation: party.Abbreviation,
                Seats: pr.Overall
            };
        })
        .sort((a: { Seats: number; }, b: { Seats: number; }) => b.Seats - a.Seats);
    res.send({partyResults});
    next();
});