const db = require("../database/dbconfig.js");

module.exports= {
    addListing,
    findListing,
    findByListingId,
    updateListing,
    deleteListing,
    getListingsByUsersId
};

function findListing(){
    return db("listing");
}

function addListing(listing){
    return db.insert(listing).into("listing");
}

function findByListingId(id) {
    return db("listing").where({ id });

}

function updateListing(changes, id) {
    return db("listing")
        .where({ id: id })
        .update(changes);
}

function deleteListing(id) {
    return db("listing")
        .where({ id: id })
        .del();
}

function getListingsByUsersId(users_id){
    return db("listing").where({ users_id });
}