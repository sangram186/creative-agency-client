import React, { useState } from 'react';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleInput = e => {
        const newAdminData = {...admin}
        newAdminData[e.target.name] = e.target.value;
        setAdmin(newAdminData);
    }
    
    const handleSubmit = e => {
        fetch('http://localhost:5000/admins', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                alert('Email Successfully added as admin')
            }
        })
        e.preventDefault();
    }

    return (
        <div className='make-admin'>
            <form className='container row' onSubmit={handleSubmit}>
                <div class="form-group col-md-6">
                    <label for="exampleFormControlInput1">Email</label>
                    <input onBlur={handleInput} type="email" name='email' className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className='d-flex align-items-center'>
                    <button type="submit" className='btn btn-success mt-3'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;