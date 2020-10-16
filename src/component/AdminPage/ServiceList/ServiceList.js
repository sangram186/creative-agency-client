import React, { Children, useEffect } from 'react';
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

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllOrders(data)
            })
    }, []);

    const [role, setRole] = useState('Done');

    const handleChange = e => {
        console.log(e.target.value)
    }

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
                    allOrders.map((orderList, index) => {
                        const { name, email, details, order } = orderList;

                        return (

                            allOrders.length > 0 ?
                                < tbody >
                                    <tr>
                                        <th scope="row">{name}</th>
                                        <td>{email}</td>
                                        <td>{order}</td>
                                        <td>{details}</td>
                                        <td>
                                            <select onChange={handleChange}>
                                                <option>Pending</option>
                                                <option>Done</option>
                                                <option>On going</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody> :
                                <h1 className='w-100 h-100 text-center text-white mt-5 p-3' style={{ background: '#009444' }}>Loading Data...</h1>
                        )
                    })
                }
            </table>

        </div >
    );
};

export default ServiceList;