import React from 'react';
import Sidebar from '../../CutomerPage/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", height:"100%" }}>
            <h5 className="text-brand">Make Admin</h5>
            <br/>
            <form style={{width:'700px'}}>
                <div className="form-group">
                    <input  type="email" className="form-control" name="email" placeholder="Email Address" />
                </div>
                <button type="submit" className="text-white" style={{width:'150px', height: '30px', backgroundColor:'#111430', borderRadius: '5px'}}>Submit</button>
            </form>
        </div>
    </section>
    );
};

export default MakeAdmin;