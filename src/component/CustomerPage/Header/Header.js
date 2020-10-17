import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Header = () => {

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allAdmins')
            .then(response => response.json())
            .then(data => setAdmins(data));
    }, [])

    const sessionData = sessionStorage.getItem('userInfo');
    const userData = JSON.parse(sessionData);
    const { name, photo } = userData;

    const isAdmin = admins.find(admin => admin.email === userData.email);

    return (
        // <div style={{ height: '68px' }} className='container-fluid row'>
        //     <div className="col-md-2 col-xs-2">
        //         <Link to='/'>
        //             <img className=" logo-for-customer" src={logo} alt="" />
        //         </Link>
        //     </div>
        //     <div className="col-md-10 col-xs-10 d-flex justify-content-end align-items-center header-customer">
        //         <div className='d-flex justify-content-between align-items-center overflow-hidden'>
        //             {
        //                 isAdmin && <Link to='/admin'><button className='btn black-button mr-4'>Admin</button></Link>
        //             }
        //             <img className='mr-3' style={{ width: '50px', borderRadius: '50%'}}src={photo} alt=""/>
        //             <h5 className='mr-5'>{name}</h5>
        //         </div>
        //     </div>
        // </div>
        <div style={{ height: '68px' }} className='d-flex ' >
            <div className="w-50">
                <Link to='/'>
                    <img className="ml-2 logo-for-customer" src={logo} alt="" />
                </Link>
            </div>
            <div className="w-50 d-flex justify-content-end align-items-center header-customer">
                <div className='d-flex justify-content-between align-items-center overflow-hidden'>
                    {
                        isAdmin && <Link to='/admin'><button className='btn black-button mr-4'>Admin</button></Link>
                    }
                    <img className='mr-3' style={{ width: '50px', borderRadius: '50%'}}src={photo} alt=""/>
                    <h5 className='mr-5'>{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Header;