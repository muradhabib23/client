import React from 'react';
import Sidebar from '../../CutomerPage/Sidebar/Sidebar';

const AddService = () => {
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", height:"100%" }}>
            <h5 className="text-brand">Add Service</h5>
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <form style={{width:'500px'}}>
                    <div className="form-group">
                        <input  type="text" className="form-control" name="title" placeholder="Service Title" />
                    </div>
                    <div className="form-group">
                        <input style={{height:'100px'}}  type="text" className="form-control" name="description" placeholder="Description" />
                    </div>
                    </form>
                </div>
                <div className="col-md-6" style={{width:'500px'}}>
                    <div className="form-group">
                        <input  type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="text-white" style={{marginLeft: '370px',width:'150px', height: '30px', backgroundColor:'#111430', borderRadius: '5px'}}>Submit</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AddService;