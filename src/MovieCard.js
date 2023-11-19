import React from "react";

const MovieCard = ({ movie, imageClick }) => {
  const { imdbID, Year, Poster, Title, Type } = movie;

  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img
          className="movie-img"
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
          onClick={imageClick}
        />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
