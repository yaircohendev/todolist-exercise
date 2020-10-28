const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const getUsers = require("./queries").getUsers;

app.get("/", async (req, res) => {
  await getUsers(req, res);
});

app.listen(3000, () => console.log("Listening on port 3000"));
