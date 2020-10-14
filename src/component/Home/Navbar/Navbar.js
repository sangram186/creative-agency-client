import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-transparent mb-5">
            <Link className="navbar-brand" to="/">
                <img style={{ width: '150px' }} src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link ml-4" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-4" href="#">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-4" href="#">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-4" href="#">Contact Us</Link>
                    </li>
                    <button className='btn ml-4'><Link to='/login'>Login</Link></button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;