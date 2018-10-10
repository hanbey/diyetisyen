"use strict";
const express = require("express");
const router = express.Router();
const { sign } = require("jsonwebtoken");
const { db } = require("../../config/db");

const logn = async (req, res) => {
  try {
    let kullanici = await db.kullanici.findOne({
      where: {
        kullanici_adi: req.body.kullanici_adi,
        sifre: req.body.sifre,
        yetkilendirme_id: "1"
      }
    });
    kullanici = JSON.parse(JSON.stringify(kullanici));
    if (kullanici) {
      let token = sign(kullanici, process.env.SECRET, {
        expiresIn: 86400
      });
      res.json({
        kullanici: kullanici,
        token: token
      });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

router.post("/", logn);

module.exports = router;
