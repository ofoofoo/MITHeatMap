const validator = require("./validator");
validator.checkSetup();

require("dotenv").config();

const http = require("http");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");

const api = require("./api");
const auth = require("./auth");

const socketManager = require("./server-socket");

mongo_username = process.env.MONGO_USERNAME;
mongo_password = process.env.MONGO_PASSWORD;
const mongoConnectionURL = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.ihatq2y.mongodb.net/?retryWrites=true&w=majority`;
const databaseName = "MIT-heat-map";

mongoose.set("strictQuery", false);

// delete later
// const User = require("./models/user");
// connect to mongodb
mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  // .then(() => {
  //   const dummyUser = new User({
  //     name: "Nathan Xiong",
  //     googleid: "0"
  //   })

  //   return dummyUser.save();
  // })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

// create a new express server
const app = express();
app.use(validator.checkRoutes);

// serve static files from "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// allow us to process POST requests
app.use(express.json());

// set up a session, which will persist login data across requests
app.use(
  session({
    // TODO: add a SESSION_SECRET string in your .env file, and replace the secret with process.env.SESSION_SECRET
    secret: "session-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// this checks if the user is logged in, and populates "req.user"
app.use(auth.populateCurrentUser);

// connect user-defined routes
app.use("/api", api);

// load the compiled react files, which will serve /index.html and /bundle.js
const reactPath = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(reactPath));

// for all other routes, render index.html and let react router handle it
app.get("*", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});

// any server errors cause this function to run
app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status === 500) {
    // 500 means Internal Server Error
    console.log("The server errored when processing a request!");
    console.log(err);
  }

  res.status(status);
  res.send({
    status: status,
    message: err.message,
  });
});

// hardcode port to 3000 for now
const port = process.env.PORT || 3000;
const server = http.Server(app);
socketManager.init(server);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
