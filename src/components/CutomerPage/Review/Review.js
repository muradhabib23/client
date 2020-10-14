import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [review, setReview] = useState({});

    const handleBlur = e => {
        const newOrder = { ...review };
        newOrder[e.target.name] = e.target.value;
        setReview(newOrder);
    }
    const handleSubmitReview = () => {
        const formData = new FormData()
        formData.append('name', review.name);
        formData.append('company', review.company);
        formData.append('description', review.description);
    
        fetch('http://localhost:5000/review ', {
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
            <form onSubmit={handleSubmitReview} style={{width:'700px'}}>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company's Name, Designation" />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} style={{height:'100px'}}  type="text" className="form-control" name="description" placeholder="Description" />
                </div>
                <button type="submit" className="text-white" style={{width:'170px', height: '45px', backgroundColor:'#111430', borderRadius: '5px'}}>Submit</button>
            </form>
        </div>
    </section>
    );
};

export default Review;