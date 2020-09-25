import React from 'react';
import RBCarousel from 'react-bootstrap-carousel';
import Popular from './10Popular/TenPopular.jsx'


//import Header from './Header/header.jsx';


function Home () {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <RBCarousel
                            autoplay={true}
                            pauseOnVisibility={true}
                            slidesshowSpeed={5000}
                            version={4}
                            indicators={false}
                        >
                            <Popular />
                        </RBCarousel>
                    </div>
                </div>
            </div >
        </div>



    )
}
export default Home;