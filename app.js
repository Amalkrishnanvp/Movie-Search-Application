const express = require("express");

const app = express();
const port = 1000;

// View engine setup: Handlebars
app.set("view engine", "hbs");

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static("public"));

// Import routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const searchRouter = require("./routes/search");

// Use routes
app.use("/", indexRouter);
app.use("/searchmovie", usersRouter);
app.use("/searchmovielist", searchRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server started running on port: ${port}`);
});
