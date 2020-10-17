import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Customer.css';

const Customer = () => {
    return (
        // <div className="container row customer m-auto mb-5 d-flex justify-content-between align-items-center">
        //     <div className="col-md-2 col-xs-6"><img className="image-fluid" src={slack} alt=""/></div>
        //     <div className="col-md-2 "><img className="image-fluid" src={google} alt=""/></div>
        //     <div className="col-md-2 "><img className="image-fluid" src={uber} alt=""/></div>
        //     <div className="col-md-2 "><img className="image-fluid" src={netflix} alt=""/></div>
        //     <div className="col-md-2 "><img className="image-fluid" src={airbnb} alt=""/></div>
        // </div>
        <div className="container customer m-auto mt-5 d-flex justify-content-between align-items-center">
            <div><img className="image-fluid px-3" src={slack} alt=""/></div>
            <div><img className="image-fluid px-3" src={google} alt=""/></div>
            <div><img className="image-fluid px-3" src={uber} alt=""/></div>
            <div><img className="image-fluid px-3" src={netflix} alt=""/></div>
            <div><img className="image-fluid px-3" src={airbnb} alt=""/></div>
        </div>
    );
};

export default Customer;