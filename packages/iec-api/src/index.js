import dotenv from 'dotenv';
import { server } from './api.js';
import { heatCache } from './heat_cache.js';
import years from '@election-engine/common/years.json';
dotenv.config();

const port = process.env.PORT || 8080;
const host = process.env.HOST || "127.0.0.1";

if (process.env.NODE_ENV !== 'test') {
    server.listen({ port, host }, async () => {
        console.log(`DM IEC API is running on http://${host}:${port}`);
    });
}

async function main() {
    await heatCache(years);
    console.log("Cache is hot!")
}

main();