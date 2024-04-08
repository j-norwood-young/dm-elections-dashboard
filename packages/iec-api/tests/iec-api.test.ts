import supertest from "supertest";
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
    let electoral_event_id: number | null = null;
    beforeAll(async () => {
        await setupRedis();
    });

    afterAll(async () => {
        await closeRedis();
    });

    test("GET from /", () => {
        return supertest(server)
            .get("/")
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.text).toBe(JSON.stringify({ msg: "Hello, world!" }));
            });
    })

    test("GET from /electoral_types", () => {
        return supertest(server)
            .get("/electoral_types")
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body).toEqual(electoralTypes);
            });
    })

    test("GET from /electoral_events/1", () => {
        return supertest(server)
            .get("/electoral_events/1")
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.length).toBeGreaterThan(4);
                electoral_event_id = response.body[0].ID;
            });
    })

    test("GET from /contesting_parties/{electoral_event_id}", () => {
        return supertest(server)
            .get(`/contesting_parties/${electoral_event_id}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.length).toBeGreaterThan(10);
            });
    })

    test("GET from /results/{electoral_event_id}", () => {
        return supertest(server)
            .get(`/results/${electoral_event_id}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.PartyBallotResults.length).toBeGreaterThan(10);
            });
    })

    test("GET from /seats/{electoral_event_id}", () => {
        return supertest(server)
            .get(`/seats/${electoral_event_id}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.PartyResults.length).toBeGreaterThan(10);
            });
    })

    test("GET from /provinces/{electoral_event_id}", () => {
        return supertest(server)
            .get(`/provinces/${electoral_event_id}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                // console.log(response.body);
                expect(response.body.length).toBeGreaterThan(0);
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
        return supertest(server)
            .get("/results/seats/national/2019")
            // .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.partyResults.length).toBeGreaterThan(10);
            })
    })

    test("GET from /results/votes/national/2019", () => {
        return supertest(server)
            .get("/results/votes/national/2019")
            // .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                console.log(response.body[0].PartyBallotResults);
                expect(response.body.length).toBe(10);
                expect(response.body[0].PartyBallotResults.length).toBeGreaterThan(2);
            })
    })
});