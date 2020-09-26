import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../../action/fetchGenre.jsx';
import './list.scss';

const GenreList = props => {
    useEffect(() => {
        props.GenresDisplay()
    }, [])
    const Lists = props.Genres.map(item => {
        return (
            <li className="list-inline-item" key={item.id} >
                <button className="btn btn-outline-info" type="button">{item.name} </button>
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
const mapDispatchToProps = dispatch => ({ GenresDisplay: () => fetchGenres(dispatch) });
const connectedByGenres = connect(mapStateToProps, mapDispatchToProps)(GenreList)

export default connectedByGenres;