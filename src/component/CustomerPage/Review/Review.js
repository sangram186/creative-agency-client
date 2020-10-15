import React from 'react';

const Review = () => {
    return (
        <div className='w-50'>
            <form className='pt-4 pl-4'>
                <div class="form-group">
                    <input type="email" class="form-control p-3" id="exampleFormControlInput1" placeholder="Your email address" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Your name / company’s name" />
                </div>
                <div class="form-group">
                    <textarea class="form-control p-4" id="exampleFormControlTextarea1" rows="8" placeholder="Your Message"></textarea>
                </div>
                <button className='btn black-button'>Send</button>
            </form>
        </div>
    );
};

export default Review;