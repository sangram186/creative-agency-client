import React from 'react';
import './FeedBack.css';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

const feedbacks = [
    {
        img: customer1,
        name: 'Nash Patrik',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    },
    {
        img: customer2,
        name: 'Miriam Barron',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    },
    {
        img: customer3,
        name: 'Bria Malone',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
    },
]

const FeedBack = () => {
    return (
        <div style={{height: '480px'}}>
            <h2 className='text-center mb-5 pt-5'>Clients <span style={{ color: '#7AB259' }}>Feedbacks</span></h2>
            <div className="container row m-auto">
                {
                    feedbacks.map((feedback, index) => {
                        return (
                            <div feedback={feedback} key={index} className="col-md-4 feedback">
                                <div className="d-flex align-items-center mb-4">
                                    <img className='mr-4' style={{width: '66px'}} src={feedback.img} alt=""/>
                                    <div>
                                        <h5>{feedback.name}</h5>
                                        <h6>{feedback.designation}</h6>
                                    </div>
                                </div>
                                <p>{feedback.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeedBack;