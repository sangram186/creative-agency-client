import React, { useState } from 'react';

const Review = () => {
    const [review, setReview] = useState({})

    const sessionData = sessionStorage.getItem('userInfo');
    const userData = JSON.parse(sessionData);

    const handleBlur = e => {
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        newReview.photo = userData.photo;
        setReview(newReview);
    }

    const handleSubmit = e => {
        fetch('https://evening-basin-84570.herokuapp.com/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                alert('Your Review successfully published')
            }
        })
        e.preventDefault();
    }
    return (
        <div className='w-50'>
            <form onSubmit={handleSubmit} className='pt-4 pl-4'>
                <div class="form-group">
                    <input onBlur={handleBlur} name='name' type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Your Name" />
                </div>
                <div class="form-group">
                    <input onBlur={handleBlur} name='companyName' type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Company's name, Designation" />
                </div>
                <div class="form-group">
                    <textarea onBlur={handleBlur} name='description' class="form-control p-4" id="exampleFormControlTextarea1" rows="8" placeholder="Description"></textarea>
                </div>
                <button type="submit" className='btn black-button'>Send</button>
            </form>
        </div>
    );
};

export default Review;