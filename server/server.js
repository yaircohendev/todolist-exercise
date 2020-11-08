const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const mongo = mongoose.connection;
mongo.on("error", error => console.log(error));
mongo.once("open", () => console.log("connection to db established"));

const userRoutes = require("./routes/users");

app.use("/users", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
