import React, { useState } from 'react';
import BodyContent from '../BodyContent/BodyContent';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const CustomerPage = () => {
    const [displayItem, setDisplayItem] = useState('order');
    return (
        <div>
            <Header />
            {/* <div className='row container-fluid'>
                <div className="col-md-2 col-xs-2">
                    <Sidebar item={displayItem} setItem={setDisplayItem}/>
                </div>
                <div className="col-md-10 col-xs-10"  style={{backgroundColor: '#F4F7FC'}}>
                    <BodyContent  item={displayItem} setItem={setDisplayItem}/>
                </div>
            </div> */}
            <div style={{height: '100%'}} className='d-flex '>
                <div style={{width: '15%'}} className="ml-4 mr-4">
                    <Sidebar item={displayItem} setItem={setDisplayItem}/>
                </div>
                <div className=""  style={{backgroundColor: '#F4F7FC', width: '85%'}}>
                    <BodyContent  item={displayItem} setItem={setDisplayItem}/>
                </div>
            </div>
        </div>
    );
};

export default CustomerPage;