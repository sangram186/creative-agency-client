import React, { useState } from 'react';
import BodyContent from '../BodyContent/BodyContent';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const CustomerPage = () => {
    const [displayItem, setDisplayItem] = useState('order');
    return (
        <div>
            <Header />
            <div className='row container-fluid'>
                <div className="col-md-2">
                    <Sidebar item={displayItem} setItem={setDisplayItem}/>
                </div>
                <div className="col-md-10"  style={{backgroundColor: '#F4F7FC', height: 'calc(100vh - 68px)'}}>
                    <BodyContent  item={displayItem} setItem={setDisplayItem}/>
                </div>
            </div>
        </div>
    );
};

export default CustomerPage;