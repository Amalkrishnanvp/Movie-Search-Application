document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn");
  const cinemaHolder = document.querySelector(".cinema-holder");

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
    console.log(data.movieDetails);
  }

  searchBtn.addEventListener("click", () => {
    if (cinemaHolder.value) {
      const movieName = cinemaHolder.value;
      searchMovie(movieName);
    }
  });
});
