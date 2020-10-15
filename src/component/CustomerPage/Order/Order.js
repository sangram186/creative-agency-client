import React from 'react';
import './Order.css';

const Order = () => {
    return (
        <form className='w-50 p-5 order-page'>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Your name / company’s name" />
            </div>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Your email address" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Order" />
            </div>
            <div class="form-group">
                <textarea class="form-control" rows="4" placeholder="Project Details"></textarea>
            </div>
            <div className='d-flex'>
                <input type="text" className='w-50' placeholder="Your Order" />
                <input type="file" className='order-upload-button' placeholder="Your Order" />
            </div>
            <button className='btn black-button mt-4'>Send</button>
        </form>
    );
};

export default Order;