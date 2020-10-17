import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";

const Navbar = () => {

    const infoFromSession = sessionStorage.getItem('userInfo');
    const userData = JSON.parse(infoFromSession);

    const handleLogOut = () => {
        firebase.auth().signOut().then(function() {
            sessionStorage.removeItem('userInfo');
            window.location.reload();
          }).catch(function(error) {
            // An error happened.
          });
    }

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
                        <Link className="nav-link ml-4" to='/customer'>Dashboard</Link>
                    </li>
                    {
                        infoFromSession ? <button onClick={handleLogOut} className='btn ml-4 black-button'>Logout</button> :
                        <Link to='/login'><button className='btn ml-4 black-button'>Login</button></Link>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;