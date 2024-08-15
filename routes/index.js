const express = require("express");
const router = express.Router();

/* GET Home Page */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Movie Search Application",
    message: "Success",
  });
});

module.exports = router;
