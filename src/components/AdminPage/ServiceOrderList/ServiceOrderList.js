import React from 'react';
import Sidebar from '../../CutomerPage/Sidebar/Sidebar';

const ServiceOrderList = () => {
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", height:"100%" }}>
            <h5 className="text-brand">Service Order List</h5>
            <br/>
            
        </div>
    </section>
    );
};

export default ServiceOrderList;