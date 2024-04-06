import restify from 'restify';
import dotenv from 'dotenv';
import { setupRedis, getCache, setCache } from './cache';
import * as ElectionResults from './election_results';

dotenv.config();

const port = process.env.PORT || 8080;
const host = process.env.HOST || "127.0.0.1";

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

if (process.env.NODE_ENV !== 'test') {
    server.listen(port, host || "127.0.0.1", async () => {
        await setupRedis();
        console.log(`DM IEC API is running on http://${host}:${port}`);
    });
}