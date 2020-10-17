import React, { useEffect, useState } from 'react';
import './FeedBack.css';

const FeedBack = () => {
    const [feedbacks, setFeedback] = useState([]);

    useEffect(() => {
        fetch('https://evening-basin-84570.herokuapp.com/allReviews')
            .then(response => response.json())
            .then(data => setFeedback(data))
    }, [])
    return (
        <div className=" mb-5 pb-5 feedback-container">
            <h2 className='text-center mb-5 pt-5'>Clients <span style={{ color: '#7AB259' }}>Feedbacks</span></h2>
            <div className="container row m-auto">
                {
                    feedbacks.map((feedback, index) => {
                        return (
                            <div feedback={feedback} key={index} className="col-md-4 feedback">
                                <div className="d-flex align-items-center mb-4">
                                    <div>
                                        <img className='mr-3' style={{borderRadius: '50%', width: '65px'}} src={feedback.photo} alt=""/>
                                    </div>
                                    <div>
                                        <h5>{feedback.name}</h5>
                                        <h6>{feedback.companyName}</h6>
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