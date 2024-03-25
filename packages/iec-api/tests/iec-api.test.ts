import supertest from "supertest";
import { server, setupRedis, closeRedis } from "../src/index";

describe("IEC API tests", () => {
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
})