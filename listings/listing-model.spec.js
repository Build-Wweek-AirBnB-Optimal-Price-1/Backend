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
                rooms:"2",
                nights: "3",
                baths: "2",
                // accomodates: "1",
                // instant_bookable:"1",
                // maximum_nights:"7",
                // minimum_nights:"3",
                // price: "400",
                users_id: 1
            });
            await Listing.deleteListing({ id: 13});
            const listing = await db("listing");
            expect(listing).toHaveLength(1);
        });
    });
});