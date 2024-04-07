import dotenv from 'dotenv';
import { server } from './api';
import { setupRedis, getCache, setCache } from './cache';

dotenv.config();

const port = process.env.PORT || 8080;
const host = process.env.HOST || "127.0.0.1";
const years = ["2019", "2014", "2009"]

// async function heatCache() {
//     const electoralTypes = await ElectionResults.electoralTypes();
//     setCache("electoral_types", electoralTypes);
//     const national_election = electoralTypes.find((et: any) => et.Description === "National Election");
    
//     if (!national_election) {
//         throw new Error("National Election not found");
//     }
//     const electoralEvents = await ElectionResults.electoralEvents(national_election.ID);
//     if (!electoralEvents) {
//         throw new Error("National Election not found");
//     }
//     electoralEvents.forEach(async (ee: any) => {
//         setCache(`electoral_events_${ee.ID}`, ee);
//         await ElectionResults.provinces(ee.ID);
//         await ElectionResults.consetingParties(ee.ID);
//         await ElectionResults.results(ee.ID);
//         await ElectionResults.seats(ee.ID);
//     });
//     years.forEach(async (year) => {
//         const national_event = electoral_events.find((ee: any) => ee.Description.includes(year));
//         if (!national_event) {
//             return;
//         }
//         await ElectionResults.consetingParties(national_event.ID);
//         await ElectionResults.results(national_event.ID);
//         await ElectionResults.seats(national_event.ID);
//     });
// }

if (process.env.NODE_ENV !== 'test') {
    server.listen(port, host || "127.0.0.1", async () => {
        await setupRedis();
        console.log(`DM IEC API is running on http://${host}:${port}`);
    });
}