import React from 'react';
//import RBCarousel from 'react-boostrap-carousel';
import TenPopular from './10Popular/TenPopular.jsx';
import Header from './Header/header.jsx';


function Home () {
    return (
        <main>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TenPopular />
                    </div>
                </div>
            </div>
        </main>

    )
}
export default Home;