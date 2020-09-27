import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchGenres, fetchByGenres } from '../../../action/fetchActions.jsx';
import './list.scss';

const GenreList = props => {
    useEffect(() => {
        props.GenresDisplay()
        // eslint-disable-next-line 
    }, [])
    const Lists = props.Genres.map(item => {
        return (
            <li className="list-inline-item" key={item.id} >
                <NavLink to={`movie/${item.id}`} >
                    <button className="btn btn-outline-info" onClick={() => props.ByGenreDisplay(item.id)} type="button">{item.name} </button>
                </NavLink>
            </li>

        )
    })
    return (
        <div className="row mt-3">
            <div className="col">
                <ul className="list-inline">
                    {Lists}
                </ul>
            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    Genres: state.Genre
});
const mapDispatchToProps = dispatch => ({
    GenresDisplay: () => fetchGenres(dispatch),
    ByGenreDisplay: (ID) => fetchByGenres(dispatch, ID)
});
const connectedByGenres = connect(mapStateToProps, mapDispatchToProps)(GenreList)

export default connectedByGenres;