import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTenPopular } from '../../action/fetchGenre.jsx';

const TenPopular = props => {

    useEffect(() => {
        props.TenPopularDisplay()
    }, [])

    return (
        <div>
            <div className="carousel-center">
                <h1>TenPopular</h1>
                <img src="" alt="" />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ TenPopular: state.TenPopular });
const mapDispatchToProps = dispatch => ({ TenPopularDisplay: () => fetchTenPopular(dispatch) });

const connectedTenPopular = connect(mapStateToProps, mapDispatchToProps)(TenPopular);

export default connectedTenPopular;