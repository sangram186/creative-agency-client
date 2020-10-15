import React, { useState } from 'react';
import './Order.css';

const Order = () => {
    const [file, setFile] = useState(null);
    const [orderDetails, setOrderDetails] = useState({
        name: '',
        email: '',
        order: '',
        details: '',
        price: '',
    })

    const handleOrderInput = e => {
        const newOrderDetails = { ...orderDetails };
        newOrderDetails[e.target.name] = e.target.value;
        setOrderDetails(newOrderDetails);
    }

    const handleSubmit = (e) => {

        const formData = new FormData()

        formData.append('file', file);
        formData.append('name', orderDetails.name);
        formData.append('email', orderDetails.email);
        formData.append('order', orderDetails.order);
        formData.append('details', orderDetails.details);
        formData.append('price', orderDetails.price);

        fetch('http://localhost:5000/customerOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data) {
                    alert('Your order submitted successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })

        // fetch('http://localhost:5000/customerOrder', {
        //     method: 'POST',
        //     headers: { 'Content-Type' : 'application/json' },
        //     body: JSON.stringify(orderDetails),
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data) {
        //         alert('Order submitted')
        //     }
        // })
        e.preventDefault();
    }

    const handleFileChange = e => {
        const file = e.target.files[0];

        setFile(file)
    }

    return (
        <form className='w-50 p-5 order-page' onSubmit={handleSubmit}>
            <div class="form-group">
                <input required onBlur={handleOrderInput} name='name' type="text" class="form-control" placeholder="Your name / company’s name" />
            </div>
            <div class="form-group">
                <input required onBlur={handleOrderInput} name='email' type="email" class="form-control" placeholder="Your email address" />
            </div>
            <div class="form-group">
                <input required onBlur={handleOrderInput} name='order' type="text" class="form-control" placeholder="Your Order" />
            </div>
            <div class="form-group">
                <textarea required onBlur={handleOrderInput} name='details' class="form-control" rows="4" placeholder="Project Details"></textarea>
            </div>
            <div className='d-flex'>
                <input required onBlur={handleOrderInput} name='price' type="text" className='w-50' placeholder="Price" />
                <input required onChange={handleFileChange} type="file" className='order-upload-button' placeholder="Your Order" />
            </div>
            <button type="submit" className='btn black-button mt-4'>Send</button>
        </form>
    );
};

export default Order;