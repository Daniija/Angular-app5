const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const studentRoute = require("./routes/student-router");

// mongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/students")
  .then((x) => {
    console.log(`Connected to MongoDB Successfully! Database name: "
    ${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongodb", err.reason);
  });

// create express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*", "http://localhost:3000"));

app.use("/api", studentRoute);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`listening on port ${port}`));
