"use strict";

const { verify } = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["token"];
  if (!token) {
    return res.status(401).send({ message: "Token Yok " });
  } else {
    verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).send({ message: "Başarısız Oldu." });
      } else {
        req.kullanici = decoded;
        next();
      }
    });
  }
};
