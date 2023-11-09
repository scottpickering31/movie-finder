import React from "react";

const LargeMovieCard = ({ detailedMovies }) => {
  const { Released, Plot, Title, Runtime, Poster } = detailedMovies;
  // Render details of the chosen movie here
  return (
    <div className="detailed-description">
      <h2>{Title}</h2>
      <p>{Plot}</p>
      <p>{Released}</p>
      <img src={Poster} />
      <p>{Runtime}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default LargeMovieCard;
