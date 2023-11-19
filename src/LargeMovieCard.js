import React from "react";

const LargeMovieCard = ({ detailedMovies }) => {
  const { Released, Plot, Title, Runtime, Poster } = detailedMovies;
  // Render details of the chosen movie here
  return (
    <>
      <div className="large-movie-container">
        <h2>{Title}</h2>
        <div className="large-movie-information">
          <div className="large-movie-image">
            <img src={Poster} />
          </div>
          <div>
            <p>{Plot}</p>
            <div className="released-runtime">
              <p>{Released}</p>
              <p>{Runtime}</p>
            </div>
          </div>
        </div>
        {/* Add more details as needed */}
      </div>
    </>
  );
};

export default LargeMovieCard;
