import React from 'react';

const Movie = ({ movie }) => {
    return (
        <div className="movies">
            <h4>{movie.title}</h4>
            <img src={movie.backPoster} alt="" />
            <p>{movie.vote_average} </p>

        </div>
    )
}
export default Movie;