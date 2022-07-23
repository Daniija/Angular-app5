const { error } = require("console");
const { response } = require("express");
let express = require("express");
const app = express();

// Create a new student model for express
let Student = require("../models/students");
let studentRoute = express.Router();

// Student Routes for MongoDB
studentRoute.route("/").get((req, res) => {
  Student.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/create").post((req, res) => {
  Student.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/find/:id").get((req, res) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/update/:id").put((req, res) => {
  Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      cohort: req.body.cohort,
      phoneNumber: req.body.phoneNumber,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    }
  );
});

studentRoute.route("/remove/:id").delete((req, res) => {
  Student.findOneAndRemove(req.body.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = studentRoute;
