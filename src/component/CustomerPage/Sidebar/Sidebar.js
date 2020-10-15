import React from 'react';
import './Sidebar.css';

const Sidebar = ({item, setItem}) => {
    return (
        <div style={{height: 'calc(100vh - 68px)'}} className='d-flex flex-column align-items-start p-3 sidebar'>
            <button onClick={() => setItem('order')} className={`btn btn-link ${item === 'order' && 'selected-button'}`}>Order</button>
            <button onClick={() => setItem('service')} className={`btn btn-link ${item === 'service' && 'selected-button'}`}>Service list</button>
            <button onClick={() => setItem('review')} className={`btn btn-link ${item === 'review' && 'selected-button'}`}>Review</button>
        </div>
    );
};

export default Sidebar;