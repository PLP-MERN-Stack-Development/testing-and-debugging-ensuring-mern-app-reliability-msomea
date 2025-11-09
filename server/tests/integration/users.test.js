const request = require("supertest");
const app = require("../../src/app");

describe("GET /api/users", () => {
  it("returns a list of users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0].username).toBe("serverUser1");
  });
});
