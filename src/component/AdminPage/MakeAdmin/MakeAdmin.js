import React from 'react';

const MakeAdmin = () => {
    return (
        <div className='make-admin'>
            <form className='container row'>
                <div class="form-group col-md-6">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className='d-flex align-items-center'>
                    <button type="submit" className='btn btn-success mt-3'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;