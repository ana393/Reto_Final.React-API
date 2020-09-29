import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchBySearch } from '../../action/fetchActions.js';
import './search.scss';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Search = props => {
    const [search, setSearch] = useState("");

    const searchMovie = (e) => {
        if (search) {
            props.searchTitle(search);
        }
        setSearch("")
    }
    const handleChange = e => {
        setSearch(e.target.value);
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
                <Link to="/movie/:id">
                    <span onClick={() => searchMovie()}><FaSearch /></span>
                </Link>
            </div>
        </div>

    )
}


const mapDispatchToProps = dispatch => ({ searchTitle: (word) => fetchBySearch(dispatch, word) });

const connectedSearch = connect(null, mapDispatchToProps)(Search)
export default connectedSearch;