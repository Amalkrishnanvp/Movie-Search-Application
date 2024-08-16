document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn");
  const cinemaHolder = document.querySelector(".cinema-holder");
  const movieImg = document.querySelector(".movie-img");
  const movieName = document.querySelector(".movie-name");
  const movieImdbRating = document.querySelector(".movie-imdb-rating");
  const movieYear = document.querySelector(".movie-year");
  const movieDuration = document.querySelector(".movie-duration");
  const movieGenre = document.querySelector(".movie-genre");
  const moviePlot = document.querySelector(".movie-plot");
  const movieCast = document.querySelector(".movie-cast");
  const movieDirector = document.querySelector(".movie-director");
  const movieWriter = document.querySelector(".movie-writer");
  const movieRelease = document.querySelector(".movie-release");
  const movieBoxOffice = document.querySelector(".movie-box-office");

  async function searchMovie(movieName) {
    try {
      const response = await fetch("/searchmovie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: movieName }),
      });

      if (!response.ok) {
        throw new error("Response was not ok");
      }
      const data = await response.json();
      showMovieDetails(data);
    } catch (error) {
      console.error("Error getting movie details", error);
    }
  }

  function showMovieDetails(data) {
    const movieDetails = data.movieDetails;
    console.log(movieDetails);
    movieImg.src = movieDetails.Poster;
    movieName.innerText = movieDetails.Title;
    movieImdbRating.innerText = movieDetails.imdbRating;
    movieYear.innerText = movieDetails.Year;
    movieDuration.innerText = movieDetails.Runtime;
    movieGenre.innerText = movieDetails.Genre;
    moviePlot.innerText = movieDetails.Plot;
    movieCast.innerText = movieDetails.Actors;
    movieDirector.innerText = movieDetails.Director;
    movieWriter.innerText = movieDetails.Writer;
    movieRelease.innerText = movieDetails.Released;
    movieBoxOffice.innerText = movieDetails.BoxOffice;
  }

  searchBtn.addEventListener("click", () => {
    if (cinemaHolder.value) {
      const movieName = cinemaHolder.value;
      searchMovie(movieName);
    }
  });
});
