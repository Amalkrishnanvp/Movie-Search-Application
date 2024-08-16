const express = require("express");
const router = express.Router();

/* GET Home Page */
router.get("/", async (req, res, next) => {
  // const apiKey = "b99f2eca";
  const apiUrl = `http://www.omdbapi.com/?t=rrr&apikey=b99f2eca`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new error("Movie api network response was not ok");
    }
    const data = await response.json();
    console.log(data);

    res.render("index", {
      title: "Movie Search Application",
      message: "Success",
      movie: data,
    });
  } catch (error) {
    console.error("There was a problem with fetch operation", error);
  }
});

module.exports = router;
