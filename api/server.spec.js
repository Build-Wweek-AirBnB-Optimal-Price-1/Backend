
const request = require("supertest");

const server = require("./server");

describe("server.js", function() {
  describe("environment", function() {
    it("set env to testing ", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("GET/", function() {
    it("should check if return 200", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  it("get json ", function() {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});