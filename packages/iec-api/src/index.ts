import dotenv from 'dotenv';
import { server } from './api';
import { heatCache } from './heat_cache';

dotenv.config();

const port = process.env.PORT || 8080;
const host = process.env.HOST || "127.0.0.1";
const years = ["2019", "2014", "2009"]

if (process.env.NODE_ENV !== 'test') {
    server.listen(port, host || "127.0.0.1", async () => {
        console.log(`DM IEC API is running on http://${host}:${port}`);
    });
}

async function main() {
    await heatCache(years);
}

main();