import React from 'react';
import Header from './HomeContainer/Header/header.jsx';
import Popular from './HomeContainer/10Popular/TenPopular.jsx';



function Home () {
    return (
        <div className="home">
            <Header />
            <Popular />
        </div>
    )
}
export default Home;