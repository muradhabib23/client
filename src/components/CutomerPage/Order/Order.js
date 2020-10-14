import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    
const [order, setOrder] = useState({});
const [file, setFile] = useState(null);
const handleBlur = e => {
    const newOrder = { ...order };
    newOrder[e.target.name] = e.target.value;
    setOrder(newOrder);
}

const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
}

const handleSubmitOrder = () => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', order.name);
    formData.append('email', order.email);
    formData.append('service', order.service);
    formData.append('detail', order.detail);
    formData.append('price', order.price);

    fetch('http://localhost:5000/addOrder ', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
}

    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", height:"100%" }}>
            <h5 className="text-brand">Order</h5>
            <br/>
            <form onSubmit={handleSubmitOrder} style={{width:'700px'}}>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name/Company's Name" />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur}  type="email" className="form-control" name="email" placeholder="Your Email Address" />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur}  type="text" className="form-control" name="service" placeholder="Service Name"/>
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} style={{height:'100px'}}  type="text" className="form-control" name="detail" placeholder="Project Detail" />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                </div>
                <div className="form-group">
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button onClick={handleSubmitOrder} type="submit" className="text-white" style={{width:'170px', height: '45px', backgroundColor:'#111430', borderRadius: '5px'}}>Submit</button>
            </form>
        </div>
    </section>
    );
};

export default Order;