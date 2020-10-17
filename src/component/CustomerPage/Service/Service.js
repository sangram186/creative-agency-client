import React, { useEffect, useState } from 'react';
import ServiceForCustomer from '../ServiceForCustomer/ServiceForCustomer';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';

// const fakeServices = [
//     {
//         img: service1,
//         role: 'Pending',
//         title: 'Web and mobile design',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
//     },
//     {
//         img: service2,
//         role: 'Done',
//         title: 'Graphic design',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
//     },
// ]

const Service = () => {

    const sessionData = sessionStorage.getItem('userInfo');
    const userData = JSON.parse(sessionData);
    console.log(userData.email)

    const [serviceData, setServiceDate] = useState([]);

    console.log(serviceData)

    useEffect(() => {
        fetch('https://evening-basin-84570.herokuapp.com/orderData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                setServiceDate(data)
            })
    }, [])


    return (
        <div className='row container'>
            {
                serviceData.length > 0 ? serviceData.map(service => <ServiceForCustomer service={service} />) :
                <h1 className='w-100 h-100 text-center text-white mt-5 p-3' style={{background: '#009444'}}>Loading Data...</h1>
            }
        </div>
    );
};

export default Service;