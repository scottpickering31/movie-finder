import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import LargeMovieCard from "./LargeMovieCard";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchLetter, setSearchLetter] = useState("s");
  const [dataObj, setDataObj] = useState("Search");
  const [chosenMovie, setChosenMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [detailedMovies, setDetailedMovies] = useState("");

  // Set default entry for first load
  useEffect(() => {
    searchMovies("Harry Potter");
  }, []);

  // Async fetch request for movie card info
  const searchMovies = async (title) => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}&${searchLetter}=${title}`);
    const data = await response.json();
    setMovies(data[dataObj]);
    setIsLoading(false);
  };

  // Logic to dynamically change URL request information to chosen movie (largemoviecard)
  const movieChoice = async (movie) => {
    setSearchLetter("t");
    setDataObj("");
    setChosenMovie(movie);

    setIsLoading(true);
    const detailedResponse = await fetch(
      `${API_URL}&t=${movie.Title}&plot=full`
    );
    const detailedData = await detailedResponse.json();
    setDetailedMovies(detailedData);
    setIsLoading(false);
  };

  // Logic to reset the search field

  const resetSearch = () => {
    setChosenMovie(null);
    setDataObj("Search");
    setSearchLetter("s");
  };

  return (
    <div className="app">
      <h1>Scott's Movie Finder</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
            setSearchTerm("");
            resetSearch();
          }}
        />
      </div>

      {chosenMovie ? (
        <LargeMovieCard detailedMovies={detailedMovies} />
      ) : movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              imageClick={() => movieChoice(movie)}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          {isLoading ? (
            <p className="loading">Loading...</p>
          ) : (
            <h2>No movies found</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
