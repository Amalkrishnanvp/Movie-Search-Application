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
  const movieType = document.querySelector(".movie-type");
  const seriesTotalSeasons = document.querySelector(".series-total-seasons");
  const seasonsContainer = document.querySelector(".seasons-container");
  const movieAwards = document.querySelector(".movie-awards");
  const searchResultsShower = document.querySelector(".search-results-shower");
  const resultsTotal = document.querySelector(".results-total");
  const searchList = document.querySelector(".search-list");
  const holder = document.querySelector(".holder");
  let searchListToggle = false;
  let combinedHtml = "";

  holder.addEventListener("click", () => {
    if (searchListToggle) {
      hideSearchList();
    }
  });

  searchList.addEventListener("click", (event) => {
    const liElement = event.target.closest("li");
    if (liElement) {
      const movieName = liElement.querySelector("p:first-child").textContent;
      console.log(movieName);
      cinemaHolder.value = movieName;
      searchMovie(movieName);
      hideSearchList();
    }
  });

  cinemaHolder.addEventListener("keyup", async (event) => {
    const valueLength = event.target.value.length;

    if (/[a-zA-Z0-9]$/.test(event.key) || event.key === "Backspace") {
      if (valueLength) {
        const value = event.target.value;

        searchMovieList(value);
      }
    }
  });

  function hideSearchList() {
    searchResultsShower.classList.add("hidden");
    searchListToggle = false;
  }

  function showSearchList() {
    searchResultsShower.classList.remove("hidden");
    searchListToggle = true;
  }

  function toggleSearchResultShower(dataResponse) {
    if (dataResponse === "True") {
      showSearchList();
    } else {
      hideSearchList();
    }
  }

  function showSearchResults(totalResults, searchValues, dataResponse) {
    toggleSearchResultShower(dataResponse);
    if (dataResponse === "True") {
      resultsTotal.innerText = `"${totalResults}"`;
      // console.log(searchValues);

      if (combinedHtml != "") {
        combinedHtml = "";
      }

      searchValues.forEach((item) => {
        const searchContents = ` <li class="text-left flex gap-4 mb-4">
      <div class="w-20"><img src="${item.Poster}" class="object-cover w-full h-auto rounded-sm"></div>
      <div class="flex flex-col justify-center mb-5 gap-2">
        <p>${item.Title}</p>
        <p>${item.Year}</p>
      </div>
    </li>`;

        combinedHtml += searchContents;
      });

      searchList.innerHTML = combinedHtml;
    }
  }

  function makeUppercase() {
    const movieTypeElement = document.querySelector(".movie-type");
    const movieType = movieTypeElement.innerText;
    const modifiedMovieType =
      movieType.charAt(0).toUpperCase() + movieType.slice(1);
    movieTypeElement.innerText = modifiedMovieType;
  }

  makeUppercase();

  async function searchMovieList(search) {
    // alert(movieName); checkpoint 2
    try {
      const response = await fetch("/searchmovielist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: search }),
      });

      if (!response.ok) {
        throw new error("Response was not ok");
      }
      const data = await response.json();
      const movieDetails = data.movieDetails;
      const searchValues = movieDetails.Search;
      const dataResponse = movieDetails.Response;
      const totalResults = movieDetails.totalResults;
      console.log(movieDetails);
      if (searchValues) {
        console.log(searchValues);
      }
      console.log(dataResponse);
      if (totalResults) {
        console.log(totalResults);
      }
      showSearchResults(totalResults, searchValues, dataResponse);
    } catch (error) {
      console.error("Error getting movie details", error);
    }
  }

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
    movieType.innerText = movieDetails.Type;
    movieAwards.innerText = movieDetails.Awards;
    makeUppercase();
    episodeShower(movieDetails);
  }

  function episodeShower(movieDetails) {
    if (movieDetails.Type === "movie") {
      if (seasonsContainer) {
        if (!seasonsContainer.classList.contains("hidden")) {
          seasonsContainer.classList.add("hidden");
        }
      }
    } else {
      if (seasonsContainer) {
        if (seasonsContainer.classList.contains("hidden")) {
          seasonsContainer.classList.remove("hidden");
          seriesTotalSeasons.innerText = movieDetails.totalSeasons;
        } else {
          seriesTotalSeasons.innerText = movieDetails.totalSeasons;
        }
      }
    }
  }

  searchBtn.addEventListener("click", () => {
    if (cinemaHolder.value) {
      if (/^[a-zA-Z0-9]*$/.test(cinemaHolder.value)) {
        const movieName = cinemaHolder.value;
        searchMovie(movieName);
      } else {
        alert("Please enter a valide movie name!");
      }
    } else {
      alert("Please enter a movie name before searching!");
    }
  });

  cinemaHolder.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (cinemaHolder.value) {
        if (/^[a-zA-Z0-9]*$/.test(cinemaHolder.value)) {
          const movieName = cinemaHolder.value;
          searchMovie(movieName);
        } else {
          alert("Please enter a valid movie name!");
        }
      } else {
        alert("Please enter a movie name before searching!");
      }
    }
  });
});
