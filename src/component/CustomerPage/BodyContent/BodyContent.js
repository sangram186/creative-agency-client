import React from 'react';
import Order from '../Order/Order';
import Review from '../Review/Review';
import Service from '../Service/Service';

const BodyContent = ({item, setItem}) => {
    console.log(item)
    return (
        <div style={{backgroundColor: '#F4F7FC', height: 'calc(100vh - 68px)'}}>
            {
                (item === 'order' && <Order></Order>) || 
                (item === 'service' && <Service></Service>) || 
                (item === 'review' && <Review></Review>)
            }
        </div>
    );
};

export default BodyContent;