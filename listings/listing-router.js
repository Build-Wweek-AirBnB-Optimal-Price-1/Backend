const express = require("express");
const restricted = require("../auth/restricted-middleware.js");

const Listing = require("./listing-model.js");

const router = express.Router();

router.get("/", restricted, (req, res) => {
  Listing.findListing()
    .then(listing => {
      res.json(listing);
    })
    .catch(error => {
      req.status(500).json({ message: "failed to get listings" });
    });
});

router.get("/:users_id", (req, res) => {
  const { users_id } = req.params;

  Listing.getListingsByUsersId(users_id)
    .then(listingsByUsersId => {
      res.status(200).json(listingsByUsersId);
    })
    .catch(error => {
      res.status(500).json({ message: "unable to get user listing " });
    });
});

router.post("/", (req, res) => {
  const listingData = req.body;
  console.log(listingData);
  Listing.addListing(listingData)

    .then(listing => {
      res.status(201).json(listing);
    })
    .catch(error => {
      console.error(error, "this is the error");

      res.status(500).json({ message: "unable to create new listing" });
    });
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Listing.findByListingId(id)
    .then(edit => {
      if (edit) {
        Listing.updateListing(changes, id).then(update => {
          res.json(update);
        });
      } else {
        res
          .status(404)
          .json({ message: "could not find listing with given ID" });
      }
    })
    .catch(error => {
      console.error(error, "this is the error");
      res.status(500).json({ message: "Failed to update listing" });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Listing.deleteListing(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "could not find listing" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: " failed to delete listing" });
    });
});

module.exports = router;