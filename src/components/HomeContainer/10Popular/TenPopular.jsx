import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTenPopular } from '../../../action/fetchActions.jsx';
import RBCarousel from 'react-bootstrap-carousel';
import './TenPopular.scss';


const Popular = props => {

    useEffect(() => {
        props.TenPopularDisplay()
        // eslint-disable-next-line 
    }, [])

    return (
        <section>
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <RBCarousel
                            autoplay={true}
                            pauseOnVisibility={true}
                            slidesshowSpeed={1000}
                            version={4}
                            indicators={false}
                        >
                            {props.TenPopular.map(item => {
                                return (
                                    <div className="imgContainer" key={item.id} >
                                        <div className="carousel-center"  >
                                            <div className="carousel-captain" >{item.title} </div>
                                            <img style={{ height: 500 }} src={item.backPoster} alt={item.title} />
                                        </div>
                                    </div>
                                )
                            })}

                        </RBCarousel >
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({ TenPopular: state.TenPopular });
const mapDispatchToProps = dispatch => ({ TenPopularDisplay: () => fetchTenPopular(dispatch) });

const connectedTenPopular = connect(mapStateToProps, mapDispatchToProps)(Popular);

export default connectedTenPopular;