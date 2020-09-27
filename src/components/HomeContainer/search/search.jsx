import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBySearch } from '../../../action/fetchActions.jsx';
import './search.scss';
import { FaSearch } from 'react-icons/fa';

const Search = props => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        props.searchTitle()
        // eslint-disable-next-line 
    }, [])
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
                <span ><FaSearch /></span>
            </div>
        </div>

    )
}

const mapStateToProps = state => ({ MovieDetails: state.MovieDetails });
const mapDispatchToProps = dispatch => ({ searchTitle: (word) => fetchBySearch(dispatch, word) });

const connectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search)
export default connectedSearch;