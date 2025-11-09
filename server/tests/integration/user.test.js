const request = require("supertest");
const app = require("../../src/app"); // Express app

describe("User API", () => {
  it("should register a user", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({ username: "testuser", password: "1234" });
    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe("testuser");
  });
});
