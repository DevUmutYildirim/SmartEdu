const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const app = express();

mongoose.connect("mongodb://localhost/smartedu-db");

// Template Engine
app.set("view engine", "ejs"); // set engine

// Middlewares
app.use(express.static("public")); // show static files
// we need to use this middlwares to catch the data comes from the req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log("App started on " + port + " port");
});
