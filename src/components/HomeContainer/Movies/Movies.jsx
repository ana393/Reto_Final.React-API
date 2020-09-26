import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchByGenres } from '../../../action/fetchActions.jsx'
import './Movies.scss';


const Movies = props => {
    useEffect(() => {
        props.MovieList()
    }, [])
    console.log('List of Movies', props)
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
const mapDispatchToProps = dispatch => ({ MovieList: (id) => fetchByGenres(dispatch) })
const connectedMovies = connect(mapStateToProps, mapDispatchToProps)(Movies)
export default connectedMovies;
