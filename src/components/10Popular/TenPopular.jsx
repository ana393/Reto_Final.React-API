import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTenPopular } from '../../action/fetchGenre.jsx';
import RBCarousel from 'react-bootstrap-carousel';

const Popular = props => {

    useEffect(() => {
        props.TenPopularDisplay()
    }, [])

    return (
        <div className="MainContainor">
            <div className="row">
                <div className="col">
                    <RBCarousel
                        autoplay={true}
                        pauseOnVisibility={true}
                        slidesshowSpeed={5000}
                        version={4}
                        indicators={false}
                    >
                        {props.TenPopular.map(item => {
                            return (
                                <div key={item.id} >
                                    <div className="carousel-center"  >
                                        <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
                                    </div>
                                </div>
                            )
                        })}

                    </RBCarousel >
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ TenPopular: state.TenPopular });
const mapDispatchToProps = dispatch => ({ TenPopularDisplay: () => fetchTenPopular(dispatch) });

const connectedTenPopular = connect(mapStateToProps, mapDispatchToProps)(Popular);

export default connectedTenPopular;