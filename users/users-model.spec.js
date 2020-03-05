const User = require("./users-model.js");

const db = require("../database/dbconfig.js");

describe("users model", function() {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("add()", function() {
    it("adding a user to the db ", async function() {
      await User.add({ username: "ss", password: "password" });

      const user = await db("users");
      expect(user).toHaveLength(1);
    });
  });
});