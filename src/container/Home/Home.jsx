import React from 'react';
import Header from '../../components/Header/header.jsx';
import Popular from '../../components/10Popular/TenPopular.jsx';
import './Home.scss';



function Home () {
    return (
        <div className="home">
            <Header />
            <Popular />
        </div>
    )
}
export default Home;