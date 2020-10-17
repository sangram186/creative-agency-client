import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Customer from '../Customer/Customer';

const Header = () => {
    return (
        <div className='header-bg mb-5 pb-3'>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;