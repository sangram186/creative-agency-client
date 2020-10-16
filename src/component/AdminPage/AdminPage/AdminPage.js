import React, { useState } from 'react';
import Header from '../../CustomerPage/Header/Header';
import BodyContent from '../BodyContent/BodyContent';
import Sidebar from '../Sidebar/Sidebar';

const AdminPage = () => {
    const [adminItems, setAdminItems] = useState('add-service');
    return (
        <div>
            <Header />
            <div className='row container-fluid'>
                <div className="col-md-2">
                    <Sidebar item={adminItems} setItem={setAdminItems}/>
                </div>
                <div className="col-md-10" style={{ backgroundColor: '#F4F7FC', height: 'calc(100vh - 68px)' }}>
                    <BodyContent  item={adminItems} setItem={setAdminItems}/>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;