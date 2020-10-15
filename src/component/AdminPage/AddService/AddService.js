import React from 'react';

const AddService = () => {
    return (
        <div className='add-service'>
            <form>
                <div className='row container'>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <div class="form-group col-md-6">
                        <textarea class="form-control p-4" id="exampleFormControlTextarea1" rows="5" placeholder="Your Message"></textarea>
                    </div>

                </div>
                <button type="submit" className='btn btn-success mt-4 ml-auto d-flex justify-content-end px-3'>Submit</button>
            </form>
        </div>
    );
};

export default AddService;