const express = require("express");
const router = express.Router();

const mongoDB = require("../queries/mongo");
const psql = require("../queries/psql");

const db = psql;
const backupDB = mongoDB;

router.get("/", async (req, res) => {
  await db.getAllUsers(req, res);
});

router.get("/:id", async (req, res) => {
  await db.getUserById(req, res);
});

router.post("/", async (req, res) => {
  await db.createUser(req, res);
  await backupDB.createUser(req, res);
});

router.put("/:id", async (req, res) => {
  await db.updateUser(req, res);
  await backupDB.updateUser(req, res);
});

router.delete("/:id", async (req, res) => {
  await db.deleteUser(req, res);
  await backupDB.deleteUser(req, res);
});

module.exports = router;
