import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faIgloo, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({item, setItem}) => {
    return (
        <div className='d-flex flex-column align-items-start p-3 sidebar mt-5'>
            <button onClick={() => setItem('service-list')} className={`btn btn-link ${item === 'service-list' && 'selected-button'}`}><FontAwesomeIcon icon={faIgloo} /> Service List</button>
            <button onClick={() => setItem('add-service')} className={`btn btn-link ${item === 'add-service' && 'selected-button'}`}><FontAwesomeIcon icon={faPlus} /> Add Service</button>
            <button onClick={() => setItem('make-admin')} className={`btn btn-link ${item === 'make-admin' && 'selected-button'}`}><FontAwesomeIcon icon={faUserPlus} /> Make Admin</button>
        </div>
    );
};

export default Sidebar;