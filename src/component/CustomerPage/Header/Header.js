import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Header = () => {
    const sessionData = sessionStorage.getItem('userInfo');
    const userData = JSON.parse(sessionData);
    const { name, photo } = userData;
    return (
        <div style={{ height: '68px' }} className='container-fluid row'>
            <div className="col-md-2">
                <Link to='/'>
                    <img className="ml-5" style={{ width: '150px', marginTop: '10px' }} src={logo} alt="" />
                </Link>
            </div>
            <div className="col-md-10 d-flex justify-content-between align-items-center">
                <h5>Order</h5>
                <div className='d-flex align-items-center overflow-hidden'>
                    <img className='mr-3' style={{ width: '50px', borderRadius: '50%'}}src={photo} alt=""/>
                    <h5 className='mr-5'>{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Header;