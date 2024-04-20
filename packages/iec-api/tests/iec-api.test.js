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

    test("GET from /electoral_types", () => {
        return server.inject({
            method: "GET",
            url: "/electoral_types"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.payload).toBe(JSON.stringify(electoralTypes));
        });
    })

    test("GET from /electoral_events/1", () => {
        return server.inject({
            method: "GET",
            url: "/electoral_events/1"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.payload.length).toBeGreaterThan(4);
            electoral_event_id = JSON.parse(response.payload)[0].ID;
        });
    })

    test("GET from /contesting_parties/{electoral_event_id}", () => {
        return server.inject({
            method: "GET",
            url: `/contesting_parties/${electoral_event_id}`
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(JSON.parse(response.payload).length).toBeGreaterThan(10);
        });
    })

    test("GET from /results/{electoral_event_id}", () => {
        return server.inject({
            method: "GET",
            url: `/results/${electoral_event_id}`
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(JSON.parse(response.payload).PartyBallotResults.length).toBeGreaterThan(10);
        });
    })

    test("GET from /seats/{electoral_event_id}", () => {
        return server.inject({
            method: "GET",
            url: `/seats/${electoral_event_id}`
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(JSON.parse(response.payload).PartyResults.length).toBeGreaterThan(10);
        });
    })

    test("GET from /provinces/{electoral_event_id}", () => {
        return server.inject({
            method: "GET",
            url: `/provinces/${electoral_event_id}`
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(JSON.parse(response.payload).length).toBe(10);
        });
    })
})

describe("Combined API tests", () => {
    beforeAll(async () => {
        await setupRedis();
    });

    afterAll(async () => {
        await closeRedis();
    });

    test("GET from /results/seats/national/2019", () => {
        return server.inject({
            method: "GET",
            url: "/results/seats/national/2019"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(JSON.parse(response.payload).partyResults.length).toBeGreaterThan(10);
        });
    })

    test("GET from /results/votes/national/2019", () => {
        return server.inject({
            method: "GET",
            url: "/results/votes/national/2019"
        }).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toMatch(/json/);
            expect(JSON.parse(response.payload).length).toBe(10);
            expect(JSON.parse(response.payload)[0].PartyBallotResults.length).toBeGreaterThan(2);
        });
    })
});