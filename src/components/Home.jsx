import React from 'react';
import RBCarousel from 'react-boostrap-carousel';
import TenPopular from './10Popular/TenPopular.jsx';


function Home () {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <RBCarousel
                        autoplay={true}
                        pauseOnVisibility={true}
                        slideshowSpeed={7000}
                        version={4}
                        indicators={false}>
                        <TenPopular />
                    </RBCarousel>
                </div>
            </div>
        </div>
    )
}
export default Home;