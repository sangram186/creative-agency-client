import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container row m-auto d-flex justify-content-between align-item-center banner">
            <div className="col-md-5">
                <h1>Let’s Grow Your <br/> Brand To TheNext Level</h1>
                <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Purus commodo <br/> ipsum duis laoreet maecenas. Feugiat </p>
                <button className="btn">Hire Us</button>
            </div>
            <div className="col-md-7 d-flex justify-content-end">
                <img className="img-fluid" src={frame} alt=""/>
            </div>
        </div>
    );
};

export default Banner;