import React from 'react';
import { Link } from 'react-router-dom';
import Movies from '../../components/Movies/Movies.jsx';
import './MovieLists.scss';

function MovieDetail () {
    return (
        <main>
            <div className="nav">
                <Link to="/">
                    <span className="home">GoToHome</span>
                </Link></div>
            <Movies />
        </main>

    )
}
export default MovieDetail;