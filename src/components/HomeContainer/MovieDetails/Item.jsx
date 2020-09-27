import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="card bg-dark text-white">
            <img className="card-img" src="" alt="" />
            <div className="card-img-overlay">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Overview</p>
                <span>Algo</span>
            </div>

        </div>
    )
}
export default Item;