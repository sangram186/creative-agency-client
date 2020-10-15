import React, { Children } from 'react';
import { useState } from 'react';

const fakeServiceList = [
        {
            name: 'Sufi Ahmed Hamim',
            email: 'sufi@gmail.com',
            service: 'Graphic Design',
            projectDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: ['Pending', 'Done', 'On going'],
        },
        {
            name: 'Sufi Ahmed Hamim',
            email: 'sufi@gmail.com',
            service: 'Graphic Design',
            projectDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: ['Pending', 'Done', 'On going'],
        },
        {
            name: 'Sufi Ahmed Hamim',
            email: 'sufi@gmail.com',
            service: 'Graphic Design',
            projectDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: ['Pending', 'Done', 'On going'],
        },
        {
            name: 'Sufi Ahmed Hamim',
            email: 'sufi@gmail.com',
            service: 'Graphic Design',
            projectDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: ['Pending', 'Done', 'On going'],
        },
    ]
const ServiceList = () => {

    // const [statusItem, setStatusItem] = useState('pending');
    // console.log(statusItem)
    // const handleChange = e => {
    //     setStatusItem(e.target.value)
    // }
    
    return (
        <div className='service-list'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Details</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {
                    fakeServiceList.map((list, index) => {
                        const { name, email, projectDetails, service, status } = list;
                        
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row">{name}</th>
                                    <td>{email}</td>
                                    <td>{service}</td>
                                    <td>{projectDetails}</td>
                                    <td>
                                        <select>
                                            <option>{status[0]}</option>
                                            <option>{status[1]}</option>
                                            <option>{status[2]}</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>

        </div>
    );
};

export default ServiceList;