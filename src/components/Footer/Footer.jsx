import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';

const Footer = props => {
    return (
        <footer >
            <hr className="mt-5" style={{ borderTop: "2px solid #beb5b7" }} />
            <div className="row mt-3">
                <div className="col-md-8 col-sm-6" style={{ color: '#beb5b7' }} >
                    <h3>ABOUT ME</h3>
                    <p> GeeksHubs Academy front-end student.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius qui illum nesciunt corporis, dicta laudantium commodi inventore dolorem error tempore cupiditate est quasi ea nemo. Rerum ex voluptatem alias eligendi!</p>

                </div>
                <div className="col-md-4 col-sm-6" style={{ color: '#beb5b7' }} >
                    <h3>KEEP IN TOUCH</h3>
                    <ul className="list-unstyled">
                        <li>
                            <p>
                                <strong>
                                    <i ><FaMapMarkerAlt /> </i>Adress: Madrid, Spain
                                </strong>
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i ><FaEnvelope /> </i>Email: frontEnd@gmail.com
                                </strong>
                            </p>
                        </li>
                        <strong>
                            {(new Date().getFullYear())}
                        </strong>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;