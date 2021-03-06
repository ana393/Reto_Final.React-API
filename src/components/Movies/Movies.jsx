import React from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie.jsx'
import './Movies.scss';


const Movies = props => {
    return (
        <div className="moviesList" key="movie_list" id="movie_list" >
            {props.MovieDetails.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
    )

}

const mapStateToProps = (state) => ({ MovieDetails: state.MovieDetails })
const connectedMovies = connect(mapStateToProps, null)(Movies)
export default connectedMovies;
