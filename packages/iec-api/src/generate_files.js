import fs from 'fs';
import path from 'path';
import { getCache } from './cache.js';
import { server } from "./api.js";
import assert from 'assert';
const years = ["2019", "2014"];

export async function generateFiles() {
    let electoralTypes = await getCache("electoral_types");
    if (!electoralTypes) return;
    let national_election = electoralTypes.find((et) => et.Description === "National Election");
    let electoralEvents = (await getCache(`electoral_events_${national_election.ID}`))
        .filter((ee) => years.some((year) => ee.Description.includes(year)));
    if (!electoralEvents) return;
    // for (let ee of electoralEvents) {
    //     let provinces = await getCache(`provinces_${ee.ID}`);
    //     let seats = await getCache(`seats_${ee.ID}`);
    //     fs.writeFileSync(path.join("../../sample-data/dm", `seats_${ee.ID}.json`), JSON.stringify(seats, null, 2));
    //     let results = await getCache(`results_${ee.ID}`);
    //     fs.writeFileSync(path.join("../../sample-data/dm", `results_${ee.ID}.json`), JSON.stringify(results, null, 2));
    //     let votes = await getCache(`votes_${ee.ID}`);
    //     for (let province of provinces) {
    //         fs.writeFileSync(path.join("../../sample-data/dm", `votes_${ee.ID}_${province.ProvinceID}.json`), JSON.stringify(votes, null, 2));
    //     }
    // }

    // API data
    for (let year of years) {
        const seats = await server.inject({
            method: "GET",
            url: `/results/seats/national/${year}`
        });
        assert(seats.statusCode === 200);
        fs.writeFileSync(path.join("../../sample-data/api", `seats_${year}.json`), JSON.stringify(seats.json(), null, 2));
        const votes = await server.inject({
            method: "GET",
            url: `/results/votes/national/${year}`
        });
        assert(votes.statusCode === 200, votes.payload);
        fs.writeFileSync(path.join("../../sample-data/api", `votes_${year}.json`), JSON.stringify(votes.json(), null, 2));
    }
    process.exit(0);
}

generateFiles();