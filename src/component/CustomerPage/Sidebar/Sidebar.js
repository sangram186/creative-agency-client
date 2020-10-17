import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faIgloo, faAllergies } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({item, setItem}) => {
    return (
        <div className='d-flex flex-column align-items-start sidebar'>
            <button onClick={() => setItem('order')} className={`btn btn-link ${item === 'order' && 'selected-button'}`}><FontAwesomeIcon icon={faShoppingCart} /> Order</button>
            <button onClick={() => setItem('service')} className={`btn btn-link ${item === 'service' && 'selected-button'}`}><FontAwesomeIcon icon={faIgloo} /> Service list</button>
            <button onClick={() => setItem('review')} className={`btn btn-link ${item === 'review' && 'selected-button'}`}><FontAwesomeIcon icon={faAllergies} /> Review</button>
        </div>
    );
};

export default Sidebar;