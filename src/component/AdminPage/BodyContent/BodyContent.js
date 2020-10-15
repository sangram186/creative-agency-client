import React from 'react';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ServiceList from '../ServiceList/ServiceList';

const BodyContent = ({item, setItem}) => {
    return (
        <div style={{backgroundColor: '#F4F7FC', height: 'calc(100vh - 68px)'}}>
            {
                (item === 'service-list' && <ServiceList />)  ||
                (item === 'add-service' && <AddService />) || 
                (item === 'make-admin' && <MakeAdmin />)
            }
        </div>
    );
};

export default BodyContent;