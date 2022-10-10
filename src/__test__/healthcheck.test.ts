import supertest from "supertest";
import createServer from "../utils/server";

const app = createServer();

describe("health checking", () => {
  it("should response ok", async () => {
    await supertest(app).get(`/api/healthcheck`).expect(200);
  });
});
