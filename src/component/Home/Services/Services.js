import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceItem from '../ServiceItem/ServiceItem';

const ourServices = [
    {
        img: service1,
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
    },
    {
        img: service2,
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    },
    {
        img: service3,
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    },
]

const Services = () => {
    return (
        <div className='container text-center pt-5 mt-5 mb-5'>
            <h1>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            <div className='row justify-content-between'>
                {
                    ourServices.map((service, index) => <ServiceItem key={index} service={service}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;