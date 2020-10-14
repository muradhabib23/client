import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);


    useEffect(() => {
        fetch('https://obscure-tundra-91995.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: orderList, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [orderList])


    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", height:"100%" }}>
            <h5 className="text-brand">Service List</h5>
            <br/>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service</th>
                </tr>
            </thead>
            <tbody>
                {
                  orderList.map((order, index) => 
                        
                    <tr>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.service}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    </section>
    );
};

export default ServiceList;