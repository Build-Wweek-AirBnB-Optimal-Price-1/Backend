
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const secret = process.env.JWT_SECRET || "this a secret";

    jwt.verify(authorization, secret, function(error, decodedToken) {
      console.error({ error, decodedToken });
      if (error) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "please login and try again" });
  }
};