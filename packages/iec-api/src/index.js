import dotenv from 'dotenv';
import { server } from './api.js';
import { heatCache } from './heat_cache.js';
import { update } from './update.js';
import YEARS from '@election-engine/common/years.json' assert { type: 'json' };
dotenv.config();

let cache_hot = false;

const port = process.env.PORT || 8080;
const host = process.env.HOST || "127.0.0.1";

if (process.env.NODE_ENV !== 'test') {
    server.listen({ port, host }, async () => {
        console.log(`DM IEC API is running on http://${host}:${port}`);
    });

    server.addHook("onRequest", (req, res, done) => {
        if (!cache_hot) {
            console.log("Still starting")
            res.code(503)
            done(new Error("Service Unavailable"));
        } else {
            done();
        }
    });
}

async function main() {
    cache_hot = false;
    await heatCache(YEARS);
    cache_hot = true;
    await update();
}

main();