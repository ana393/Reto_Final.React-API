import React from 'react';
import './search.scss';
import { FaSearch } from 'react-icons/fa';

const Search = props => {
    return (
        <div className="d-flex justify-content-end h-100">
            <div className="searchbar">
                <input type="text" placeholder="search..." />
                <span ><FaSearch /></span>
            </div>
        </div>

    )
}
export default Search;