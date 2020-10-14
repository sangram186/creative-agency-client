import React from 'react';
import FooterForm from '../FooterForm/FooterForm';

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#FBD062'}}>
            <div className='d-flex align-items-center' style={{ height: '600px'}} >
                <div className="container row m-auto">
                    <div className="col-md-6">
                        <h2>Let us handle your <br /> project, professionally.</h2>
                        <small>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</small>
                    </div>
                    <div className="col-md-6">
                        <FooterForm />
                    </div>
                </div>
            </div>
            <p className='text-center mb-0 pb-3'>copyright Orange labs 2020</p>
        </footer>
    );
};

export default Footer;