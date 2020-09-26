import React from 'react';
import { connect } from 'react-redux';

import './Movies.scss';


const Movies = props => {

    return (
        <div className="movies">movie list
            { props.MovieDetails.map(movie => {
                return (
                    <div>
                        <h4>{movie.title}</h4>
                    </div>
                )
            }
            )}
        </div>
    )


}

const mapStateToProps = (state) => ({ MovieDetails: state.MovieDetails })
const connectedMovies = connect(mapStateToProps, null)(Movies)
export default connectedMovies;
