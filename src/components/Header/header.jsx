import React from 'react';
import './header.scss';
import Search from '../search/search.jsx';
import GenreList from '../../components/Genre/list.jsx';

const Header = props => {
    return (
        <header>
            <div className="content">
                <h1>Enjoy Thoughtful Entertainment</h1>
                <Search />
                <GenreList />
            </div>
        </header>
    )
}

export default Header;