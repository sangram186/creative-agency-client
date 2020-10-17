import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';

// const ourServices = [
//     {
//         img: service1,
//         title: 'Web & Mobile design',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//     },
//     {
//         img: service2,
//         title: 'Graphic design',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//     },
//     {
//         img: service3,
//         title: 'Web development',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//     },
// ]

const Services = () => {
    const [allService, setAllService] = useState([]);

    useEffect(() => {
        fetch('https://evening-basin-84570.herokuapp.com/allServices')
        .then(response => response.json())
        .then(data => {
            setAllService(data)
        })
    }, [])
    return (
        <div style={{paddingTop: '5rem'}} className='container text-center mt-5 mb-5 service'>
            <h1>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            <div className='row justify-content-between'>
                {
                    allService.length > 0 ? allService.map((service, index) => <ServiceItem key={index} service={service}></ServiceItem>) :
                    <h1 className='w-100 h-100 text-center text-white mt-5 p-3' style={{ background: '#009444' }}>Loading Data...</h1>
                }
            </div>
        </div>
    );
};

export default Services;