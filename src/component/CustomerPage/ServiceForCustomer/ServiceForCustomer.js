import React from 'react';
import './ServiceForCustomer.css';

const ServiceForCustomer = ({service}) => {
    const {order, details, image, role} = service;
    return (
        <div className='col-md-5 single-service'>
            <div className='d-flex justify-content-between mb-3'>
                {
                    image ? <img style={{width: '75px'}} src={`data:image/png;base64,${image.img}`} alt=""/> : ''
                }
                <h6 className={(role === 'Pending' && 'pending') || (role === 'Done' && 'done')}>{role}</h6>
            </div>
            <h5 className='mb-3'>{order}</h5>
            <p>{details}</p>
        </div>
    );
};

export default ServiceForCustomer;