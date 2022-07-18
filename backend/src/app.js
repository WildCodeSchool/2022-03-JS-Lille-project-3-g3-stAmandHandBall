const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const router = require("./router");
require("./passport-strategies");

const app = express();

// use some application-level middlewares
const corsWhitelist = [
  process.env.FRONTEND_URL,
  process.env.ADMIN_URL,
  undefined,
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (corsWhitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// Initialuze passport
app.use(passport.initialize());

// API routes
app.use(router);

// Redirect all requests to the REACT app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});

// ready to export
module.exports = app;
