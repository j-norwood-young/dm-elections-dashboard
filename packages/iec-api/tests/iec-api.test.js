// import supertest from "supertest";
import { server } from "../src/api";
import { setupRedis, closeRedis } from "../src/cache";

const electoralTypes = [
    {
        "ID": 1,
        "Description": "National Election"
    },
    {
        "ID": 2,
        "Description": "Provincial Election"
    },
    {
        "ID": 3,
        "Description": "Local Government Election"
    },
    {
        "ID": 4,
        "Description": "By-Election"
    }
]

describe("IEC API tests", () => {
    let electoral_event_id = null;
    beforeAll(async () => {
        await setupRedis();
    });

    afterAll(async () => {
        await closeRedis();
    });

    test("GET from /", () => {
        return server.inject({
            method: "GET",
            url: "/"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.payload).toBe(JSON.stringify({ msg: "Hello, world!" }));
        });
    })

    // test("GET from /electoral_types", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: "/electoral_types"
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(response.payload).toBe(JSON.stringify(electoralTypes));
    //     });
    // })

    // test("GET from /electoral_events/1", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: "/electoral_events/1"
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(response.payload.length).toBeGreaterThan(4);
    //         electoral_event_id = JSON.parse(response.payload)[0].ID;
    //     });
    // })

    // test("GET from /contesting_parties/{electoral_event_id}", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: `/contesting_parties/${electoral_event_id}`
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(JSON.parse(response.payload).length).toBeGreaterThan(10);
    //     });
    // })

    // test("GET from /results/{electoral_event_id}", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: `/results/${electoral_event_id}`
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(JSON.parse(response.payload).PartyBallotResults.length).toBeGreaterThan(10);
    //     });
    // })

    // test("GET from /seats/{electoral_event_id}", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: `/seats/${electoral_event_id}`
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(JSON.parse(response.payload).PartyResults.length).toBeGreaterThan(10);
    //     });
    // })

    // test("GET from /provinces/{electoral_event_id}", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: `/provinces/${electoral_event_id}`
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(JSON.parse(response.payload).length).toBe(10);
    //     });
    // })
})

describe("Combined API tests", () => {
    beforeAll(async () => {
        await setupRedis();
    });

    afterAll(async () => {
        await closeRedis();
    });

    // test("GET from /results/seats/national/2019", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: "/results/seats/national/2019"
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(JSON.parse(response.payload).PartyResults.length).toBeGreaterThan(10);
    //     });
    // })

    // test("GET from /results/votes/national/2019", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: "/results/votes/national/2019"
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(JSON.parse(response.payload).length).toBe(10);
    //         expect(JSON.parse(response.payload)[0].PartyBallotResults.length).toBeGreaterThan(2);
    //     });
    // })

    // test("GET from /results/votes/provincial/2019/Gauteng", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: "/results/votes/provincial/2019/Gauteng"
    //     }).then((response) => {
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(JSON.parse(response.payload).PartyBallotResults.length).toBeGreaterThan(2);
    //     });
    // })

    // test("GET from /results/seats/provincial/2019/Gauteng", () => {
    //     return server.inject({
    //         method: "GET",
    //         url: "/results/seats/provincial/2019/Gauteng"
    //     }).then((response) => {
    //         // console.log(response.payload);
    //         expect(response.statusCode).toBe(200);
    //         expect(response.headers['content-type']).toMatch(/json/);
    //         expect(JSON.parse(response.payload).PartyResults.length).toBeGreaterThan(2);
    //     });
    // });

    test("GET /national/2019", () => {
        return server.inject({
            method: "GET",
            url: "/national/2019"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            const data = JSON.parse(response.payload);
            expect(data.event_id).toBe(699);
            expect(data.event_name).toBe("2019 NATIONAL ELECTION");
            expect(data.registered_voters).toBeGreaterThan(100000);
            expect(data.spoilt_votes).toBeGreaterThan(1000);
            expect(data.special_votes).toBeGreaterThan(1000);
            expect(data.total_votes_cast).toBeGreaterThan(1000);
            expect(data.total_valid_votes).toBeGreaterThan(1000);
            expect(data.vd_count).toBeGreaterThan(1000);
            expect(data.vd_captured).toBeGreaterThan(1000);
            expect(data.party_ballot_results.length).toBeGreaterThan(10);
            const party = data.party_ballot_results[0];
            expect(party.party_id).toBeGreaterThan(0);
            expect(party.party_name).toBeDefined();
            expect(party.party_abbreviation).toBeDefined();
            expect(party.votes).toBeGreaterThan(1000);
            expect(party.vote_perc).toBeGreaterThan(0);
            expect(party.vote_perc).toBeLessThan(100);
            expect(party.ballot_type).toBe("National");
            expect(party.independent).toBe(false);
            expect(party.seats).toBeGreaterThan(0);
            expect(data.provincial_results.length).toBeGreaterThan(0);
            const province = data.provincial_results[0];
            expect(province.province_id).toBeGreaterThan(0);
            expect(province.province_name).toBeDefined();
            expect(province.registered_voters).toBeGreaterThan(1000);
            expect(province.spoilt_votes).toBeGreaterThan(0);
            expect(province.special_votes).toBeGreaterThan(0);
            expect(province.total_votes_cast).toBeGreaterThan(0);
            expect(province.total_valid_votes).toBeGreaterThan(0);
            expect(province.vd_count).toBeGreaterThan(0);
            expect(province.vd_captured).toBeGreaterThan(0);
            const party_result = province.party_ballot_results[0];
            expect(party_result.party_id).toBeGreaterThan(0);
            expect(party_result.party_name).toBeDefined();
            expect(party_result.party_abbreviation).toBeDefined();
            expect(party_result.votes).toBeGreaterThan(1000);
            expect(party_result.vote_perc).toBeGreaterThan(0);
            expect(party_result.vote_perc).toBeLessThan(100);
            expect(party_result.ballot_type).toBe("National");
            expect(party_result.independent).toBe(false);
            expect(party_result.seats).toBeGreaterThan(0);
        });
    });

    test("GET /provincial/2019", () => {
        return server.inject({
            method: "GET",
            url: "/provincial/2019"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            const data = JSON.parse(response.payload);
            expect(data.event_id).toBe(827);
            expect(data.event_name).toBe("2019 PROVINCIAL ELECTION");
            expect(data.registered_voters).toBeGreaterThan(100000);
            expect(data.spoilt_votes).toBeGreaterThan(1000);
            expect(data.special_votes).toBeGreaterThan(1000);
            expect(data.total_votes_cast).toBeGreaterThan(1000);
            expect(data.total_valid_votes).toBeGreaterThan(1000);
            expect(data.vd_count).toBeGreaterThan(1000);
            expect(data.vd_captured).toBeGreaterThan(1000);
            expect(data.provincial_results.length).toEqual(9);
            const province = data.provincial_results[0];
            expect(province.province_id).toBeGreaterThan(0);
            expect(province.province_name).toBeDefined();
            expect(province.registered_voters).toBeGreaterThan(1000);
            expect(province.spoilt_votes).toBeGreaterThan(0);
            expect(province.special_votes).toBeGreaterThan(0);
            expect(province.total_votes_cast).toBeGreaterThan(0);
            expect(province.total_valid_votes).toBeGreaterThan(0);
            expect(province.vd_count).toBeGreaterThan(0);
            expect(province.vd_captured).toBeGreaterThan(0);
            const party_result = province.party_ballot_results[0];
            expect(party_result.party_id).toBeGreaterThan(0);
            expect(party_result.party_name).toBeDefined();
            expect(party_result.party_abbreviation).toBeDefined();
            expect(party_result.votes).toBeGreaterThan(1000);
            expect(party_result.vote_perc).toBeGreaterThan(0);
            expect(party_result.vote_perc).toBeLessThan(100);
            expect(party_result.ballot_type).toBe("Provincial");
            expect(party_result.independent).toBe(false);
            expect(party_result.seats).toBeGreaterThan(0);
        });
    });

    test("GET /provincial/2019/Gauteng", () => {
        return server.inject({
            method: "GET",
            url: "/provincial/2019/Gauteng"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            const data = JSON.parse(response.payload);
            expect(data.event_id).toBe(827);
            expect(data.event_name).toBe("2019 PROVINCIAL ELECTION");
            expect(data.province_id).toBe(3);
            expect(data.province_name).toBe("Gauteng");
            expect(data.registered_voters).toBeGreaterThan(100000);
            expect(data.spoilt_votes).toBeGreaterThan(1000);
            expect(data.special_votes).toBeGreaterThan(1000);
            expect(data.total_votes_cast).toBeGreaterThan(1000);
            expect(data.total_valid_votes).toBeGreaterThan(1000);
            expect(data.vd_count).toBeGreaterThan(1000);
            expect(data.vd_captured).toBeGreaterThan(1000);
            expect(data.party_ballot_results.length).toBeGreaterThan(1);
            const party = data.party_ballot_results[0];
            expect(party.party_id).toBeGreaterThan(0);
            expect(party.party_name).toBeDefined();
            expect(party.party_abbreviation).toBeDefined();
            expect(party.votes).toBeGreaterThan(1000);
            expect(party.vote_perc).toBeGreaterThan(0);
            expect(party.vote_perc).toBeLessThan(100);
            expect(party.ballot_type).toBe("Provincial");
            expect(party.independent).toBe(false);
            expect(party.seats).toBeGreaterThan(0);
        });
    })
});

describe("Maps download tests", () => {
    test("GET /maps/sa-munic-ec.geojson", () => {
        return server.inject({
            method: "GET",
            url: "/maps/2024/sa-munic-ec.geojson.min.json"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/application\/json/);
        });
    });

    test("GET /maps/sa-province.json", () => {
        return server.inject({
            method: "GET",
            url: "/maps/sa-province.json"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/application\/json/);
        });
    });

    test("GET /progress/2019", () => {
        return server.inject({
            method: "GET",
            url: "/progress/2019"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/application\/json/);
            const data = JSON.parse(response.payload);
            expect(data.VDResultsIn).toBeDefined();
            expect(data.VDTotal).toBeGreaterThan(0);
            expect(data.SeatCalculationCompleted).toBeTruthy();
        });
    });

});