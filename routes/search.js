const express = require("express");
const router = express.Router();
require("dotenv").config();

const apiKey = process.env.API_KEY;

/* POST movie search */
router.post("/", async (req, res, next) => {
  const movieName = req.body.movie;
  console.log("poda patti");

  // const apiKey = "b99f2eca";
  const apiUrl = `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new error("Movie api network response was not ok");
    }
    const data = await response.json();
    console.log(data);

    res.status(200).json({ movieDetails: data });
  } catch (error) {
    console.error("There was a problem with fetch operation", error);
  }
});

module.exports = router;
