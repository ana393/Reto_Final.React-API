import React from 'react';
//import { NavLink } from 'react-router-dom';
import Movies from './HomeContainer/Movies/Movies.jsx';
import './MovieDetails.scss';

function MovieDetail () {
    return (
        <main>
            <span className="home">Home</span>
            <Movies />
        </main>

    )
}
export default MovieDetail;