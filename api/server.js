const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const listingRouter = require("../listings/listing-router.js")
const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);
server.use("/api/listing", listingRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "up", dbenv: process.env.DB_ENV });
  });
  module.exports = server;