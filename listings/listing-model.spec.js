const Listing = require("./listing-model.js");

const db = require("../database/dbconfig.js");

describe("listing model", function() {
    beforeEach(async() => {
        await db("users").truncate(); 
    });
    describe("addListing", function(){
        it("adding a listing to db", async function() {
            await db('users').insert({ username: "ss", password: "password"})

            await Listing.addListing({
                rooms: "3",
                nights: "2",
                baths: "1",
                users_id: 1
            });
            await Listing.deleteListing({ id: 13});
            const listing = await db("listing");
            expect(listing).toHaveLength(1);
        });
    });
});