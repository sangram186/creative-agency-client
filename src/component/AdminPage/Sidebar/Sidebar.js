import React from 'react';

const Sidebar = ({item, setItem}) => {
    return (
        <div style={{height: 'calc(100vh - 68px)'}} className='d-flex flex-column align-items-start p-3 sidebar'>
            <button onClick={() => setItem('service-list')} className='btn btn-link'>Order</button>
            <button onClick={() => setItem('add-service')} className='btn btn-link'>Service list</button>
            <button onClick={() => setItem('make-admin')} className='btn btn-link'>Review</button>
        </div>
    );
};

export default Sidebar;