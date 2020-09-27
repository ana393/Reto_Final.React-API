import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchBySearch } from '../../../action/fetchActions.jsx';
import './search.scss';
import { FaSearch } from 'react-icons/fa';

const Search = props => {
    const [search, setSearch] = useState("");

    const searchMovie = (e) => {
        if (search) {
            props.searchTitle(search);
        }
        setSearch("")
    }
    const handleChange = e => {
        setSearch(e.target.value.trim());
    }
    return (
        <div className="d-flex justify-content-end h-100">
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="search..."
                    value={search}
                    onChange={handleChange}
                />
                <span onClick={() => searchMovie()}><FaSearch /></span>
            </div>
        </div>

    )
}

//const mapStateToProps = state => ({ MovieDetails: state.MovieDetails });
const mapDispatchToProps = dispatch => ({ searchTitle: (word) => fetchBySearch(dispatch, word) });

const connectedSearch = connect(null, mapDispatchToProps)(Search)
export default connectedSearch;