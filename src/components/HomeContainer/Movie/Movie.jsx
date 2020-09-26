import React from 'react';
import './Movie.scss';

const Movie = ({ movie }) => {
    return (
        <div className="Singlemovie">

            <img src={movie.Poster} alt={movie.title} />
            <h4>{movie.title}</h4>
            <p>{`Rated:${movie.rating}`} </p>

        </div>
    )
}
export default Movie;