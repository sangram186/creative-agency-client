import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container row m-auto d-flex justify-content-between align-item-center banner">
            <div className="col-md-6 col-xs-12">
                <h1>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p style={{fontSize: '20px'}}>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Purus commodo <br/> ipsum duis laoreet maecenas. Feugiat </p>
                <Link to="/customer"><button className="btn black-button">Hire Us</button></Link>
            </div>
            <div className="col-md-6 col-xs-12 justify-content-end">
                <img className="img-fluid" src={frame} alt=""/>
            </div>
        </div>
    );
};

export default Banner;