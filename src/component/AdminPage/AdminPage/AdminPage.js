import React, { useState } from 'react';
import Header from '../../CustomerPage/Header/Header';
import BodyContent from '../BodyContent/BodyContent';
import Sidebar from '../Sidebar/Sidebar';

const AdminPage = () => {
    const [displayItem, setDisplayItem] = useState('service-list');
    return (
        <div>
            <Header />
            <div className='row container-fluid'>
                <div className="col-md-2">
                    <Sidebar item={displayItem} setItem={setDisplayItem}/>
                </div>
                <div className="col-md-10">
                    <BodyContent  item={displayItem} setItem={setDisplayItem}/>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;