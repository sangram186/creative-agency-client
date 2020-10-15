import React from 'react';
import ServiceForCustomer from '../ServiceForCustomer/ServiceForCustomer';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';

const fakeServices = [
    {
        img: service1,
        role: 'Pending',
        title: 'Web and mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        img: service2,
        role: 'Done',
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
]
const Service = () => {
    return (
        <div className='row container'>
            {
                fakeServices.map(service => <ServiceForCustomer service={service}/>)
            }
        </div>
    );
};

export default Service;