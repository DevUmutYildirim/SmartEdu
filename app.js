const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

const app = express();

mongoose.connect("mongodb://localhost/smartedu-db");

// Template Engine
app.set("view engine", "ejs"); // set engine

// Global Variable

global.userIN = null;

// Middlewares
app.use(express.static("public")); // show static files
// we need to use this middlwares to catch the data comes from the req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my_keyboard_foz",
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = 3000;
app.listen(port, () => {
  console.log("App started on " + port + " port");
});
