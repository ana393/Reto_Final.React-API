import React from 'react';
import { FaFilm } from 'react-icons/fa';

const PopularItem = ({ item }) => {
    return (
        <div key={item.id} >
            <div className="carousel-center"  >
                <div className="carousel-captain" ><FaFilm /> {`Popular now: ${item.title}`}  </div>
                <img style={{ height: 500 }} src={item.backPoster} alt={item.title} />
            </div>

        </div>
    )
}
export default PopularItem