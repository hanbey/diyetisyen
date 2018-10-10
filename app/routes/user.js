"use strict";

const express = require("express");
const router = express.Router();
const { db } = require("../../config/db");
const authCtrl = require("../middlewares/authtecation");

const getall = async (req, res, next) => {
  try {
    let users = await db.kullanici.findAll({
      where: {
        aktiflik: 1
      },
      include: [
        {
          model: db.yetkilendirme
        },
        {
          model: db.randevu
        }
      ]
    });
    res.send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getById = async (req, res, next) => {
  try {
    const item = await db.kullanici.findOne({
      where: { id: req.params.id }
    });
    if (item) {
      res.json({
        item: item
      });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const create = async (req, res, next) => {
  try {
    const item = await db.kullanici.create(req.body);
    if (item) {
      res.json({
        created: item
      });
    } else {
      res.json({
        created: false
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateById = async (req, res, next) => {
  try {
    const item = await db.kullanici.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (item) {
      res.json({
        updated: item
      });
    } else {
      res.json({
        updated: false
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

/*const deleteById = async (req, res, next) => {
  try {
    const item = await db.kullanici.destroy({
      where: {
        id: req.params.id
      }
    });

    if (item) {
      res.json({
        deleted: true
      });
    } else {
      res.json({
        deleted: false
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};*/

router.get("/", authCtrl, getall);
router.get("/:id", authCtrl, getById);
router.post("/", authCtrl, create);
router.put("/:id", authCtrl, updateById);

/*router.delete("/:id", authCtrl, deleteById);*/

module.exports = router;
