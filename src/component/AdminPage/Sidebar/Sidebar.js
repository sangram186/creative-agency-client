import React from 'react';

const Sidebar = ({item, setItem}) => {
    console.log(item)
    return (
        <div className='d-flex flex-column align-items-start p-3 sidebar mt-5'>
            <button onClick={() => setItem('service-list')} className={`btn btn-link ${item === 'service-list' && 'selected-button'}`}>Service List</button>
            <button onClick={() => setItem('add-service')} className={`btn btn-link ${item === 'add-service' && 'selected-button'}`}>Add Service</button>
            <button onClick={() => setItem('make-admin')} className={`btn btn-link ${item === 'make-admin' && 'selected-button'}`}>Make Admin</button>
        </div>
    );
};

export default Sidebar;