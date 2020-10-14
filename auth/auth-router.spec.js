const request = require("supertest");

const server = require("../api/server.js");
const auth = require("./auth-router.js");
const db = require("../database/dbConfig.js");

const bcrypt = require("bcryptjs");

describe("server", () => {
  describe("GET /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
});

describe("auth-router", () => {
  //   beforeEach(async () => {
  //     await db("users").truncate();
  //   });
  describe("POST /register", () => {
    it("should return status 201", () => {
      request(auth)
        .post("/register")
        .send({ username: "test", password: "password" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
    it("should return res.body.password = hash", () => {
      request(auth)
        .post("/register")
        .send({ username: "test", password: "password" })
        .then((res) => {
          expect(res.body.password).toBe(password);
        });
    });
  });
});
