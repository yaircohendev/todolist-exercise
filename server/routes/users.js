const express = require("express");
const router = express.Router();

const mongoDB = require("../queries/mongo");
const psql = require("../queries/psql");

const db = psql;
const backupDB = mongoDB;

router.get("/", db.getAllUsers);

router.get("/:id", db.getUserById);

router.post("/", async (req, res) => {
  try {
    await db.createUser(req, res);
    await backupDB.createUser(req, res);
    res.status(201).send(`User added`);
  } catch (e) {
    console.error(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await db.updateUser(req, res);
    await backupDB.updateUser(req, res);
  } catch (e) {
    console.error(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await db.deleteUser(req, res);
    await backupDB.deleteUser(req, res);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
