import React from 'react';
import Order from '../Order/Order';
import Review from '../Review/Review';
import Service from '../Service/Service';

const BodyContent = ({item, setItem}) => {
    console.log(item)
    return (
        <div>
            {
                (item === 'order' && <Order></Order>) || 
                (item === 'service' && <Service></Service>) || 
                (item === 'review' && <Review></Review>)
            }
        </div>
    );
};

export default BodyContent;