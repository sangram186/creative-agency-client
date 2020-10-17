import React from 'react';
import FooterForm from '../FooterForm/FooterForm';

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#FBD062'}}>
            <div className='d-flex align-items-center'  >
                <div className="container row m-auto footer-content">
                    <div className="col-md-6">
                        <h1>Let us handle your <br /> project, professionally.</h1>
                        <p className='mt-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <FooterForm />
                    </div>
                </div>
            </div>
            <p className='text-center pb-2'>copyright Orange labs 2020</p>
        </footer>
    );
};

export default Footer;