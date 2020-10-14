import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceItem.css';

const ServiceItem = (props) => {
    const { title, description, img } = props.service;
    return (
        <div className='col-md-3 mt-3'>
            <div className="single-service">
                <Link to='/'>
                    <img style={{ width: '75px' }} src={img} alt="" />
                    <h4 className='mb-2'>{title}</h4>
                    <p className='mb-2'>{description}</p>
                </Link>
            </div>
        </div>
    );
};

export default ServiceItem;