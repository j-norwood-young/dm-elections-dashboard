import restify from 'restify';
import dotenv from 'dotenv';
import { createClient } from 'redis';
import * as ElectionResults from './election_results';

dotenv.config();

const redis_url = process.env.REDIS_URL || 'redis://localhost:6379';
const port = process.env.PORT || 8080;
const host = process.env.HOST || "127.0.0.1";

const client = createClient({
    url: redis_url
});

export const server = restify.createServer();

server.use(restify.plugins.bodyParser());

export const setupRedis = async () => {
    if (client.isReady) return;
    await client.connect().catch((err) => {
        console.error("Unable to connect to Redis url:", redis_url);
        console.error(err.code || err.message || err);
        process.exit(1);
    });
};

export const closeRedis = async () => {
    if (!client.isReady) return;
    await client.quit().catch((err) => {
        console.error("Unable to quit Redis connection");
        console.error(err.code || err.message || err);
    });
}

async function getCache(key: string) {
    try {
        let data = await client.get(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    } catch (err: any) {
        console.error("Error getting cache:", err.code || err.message || err);
        return null;
    }
}

async function setCache(key: string, data: any) {
    try {
        await client.set(key, JSON.stringify(data));
    } catch (err: any) {
        console.error("Error setting cache:", err.code || err.message || err);
    }
}

// getNationalSeats = async (year) => {
    

server.get('/', async (req, res, next) => {
    res.send({ msg: 'Hello, world!' });
    next();
});

server.get("/national/seats/:year", async (req, res, next) => {
    const year = req.params.year;
    let seats = await client.get(`national_seats_${year}`);
    if (!seats) {
        // seats = await getNationalSeats(year);
        // client.set(`national_seats_${year}`, seats);
    }
    res.send({ year, seats });
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

if (process.env.NODE_ENV !== 'test') {
    server.listen(port, host || "127.0.0.1", async () => {
        await setupRedis();
        console.log(`DM IEC API is running on http://${host}:${port}`);
    });
}