import React from 'react';
import RBCarousel from 'react-bootstrap-carousel';
import TenPopular from './TenPopular.jsx';

const Carousel = () => {
    return (
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
                        <TenPopular />
                    </RBCarousel>
                </div>
            </div>
        </div >
    )
}
export default Carousel;