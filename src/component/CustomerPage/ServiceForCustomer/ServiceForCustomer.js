import React from 'react';
import './ServiceForCustomer.css';

const ServiceForCustomer = ({service}) => {
    const {img, title, role, description} = service;
    console.log(service)
    return (
        <div className='col-md-5 single-service'>
            <div className='d-flex justify-content-between mb-3'>
                <img style={{width: '75px'}} src={img} alt=""/>
                <h6 className={(role === 'Pending' && 'pending') || (role === 'Done' && 'done')}>{role}</h6>
            </div>
            <h5 className='mb-3'>{title}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ServiceForCustomer;