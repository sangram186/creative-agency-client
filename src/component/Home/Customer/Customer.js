import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Customer.css';

const Customer = () => {
    return (
        <div style={{width: '970px' }} className="row customer m-auto mb-5 d-flex justify-content-between align-items-center">
            <div className="col-md-2"><img src={slack} alt=""/></div>
            <div className="col-md-2"><img src={google} alt=""/></div>
            <div className="col-md-2"><img src={uber} alt=""/></div>
            <div className="col-md-2"><img src={netflix} alt=""/></div>
            <div className="col-md-2"><img src={airbnb} alt=""/></div>
        </div>
    );
};

export default Customer;