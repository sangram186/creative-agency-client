import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Header = () => {
    return (
        <div style={{ height: '68px' }} className='container-fluid row'>
            <div className="col-md-2">
                <Link to='/'>
                    <img className="ml-5" style={{ width: '150px', marginTop: '10px' }} src={logo} alt="" />
                </Link>
            </div>
            <div className="col-md-10 d-flex justify-content-between align-items-center">
                <h5>Order</h5>
                <h5 className='mr-5'>Name</h5>
            </div>
        </div>
    );
};

export default Header;