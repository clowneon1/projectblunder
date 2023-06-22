const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//Routes
const tagRoute = require("./routes/tag.route");
const projectRoute = require("./routes/project.route");
const contributorRoute = require("./routes/contributor.route");
const thumbnailRoute = require("./routes/thumbnail.route");
const aboutMeRoute = require("./routes/about-me.route");

const app = express();

const mongoUri = process.env.MONGODB_URI;
const mongodbUser = process.env.DB_USER;
const mongodbPass = process.env.DB_PASS;
const mongodbName = process.env.DB_NAME;

const PORT = process.env.port || 3000;

//establish mongoDB connection
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: mongodbName,
    user: mongodbUser,
    pass: mongodbPass,
  })
  .then(() => {
    console.log("connected to database...");
  });

//Routers
app.use(express.json());
app.use("/projects", projectRoute);
app.use("/tags", tagRoute);
app.use("/contributors", contributorRoute);
app.use("/thumbnails", thumbnailRoute);
app.use("/aboutMe", aboutMeRoute);

//error handling for non existing routes
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log("server is started");
});
