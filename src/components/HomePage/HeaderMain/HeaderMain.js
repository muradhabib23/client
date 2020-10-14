import React from 'react';
import { Link } from 'react-router-dom';
import bannerFrame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
    <main style={{height:'600px'}} className="row d-flex align-items-center">
        <div className="col-md-4 col-sm-6 col-12 offset-md-1">
            <h1 style={{color: '#111430'}}><strong>Let's Grow Your <br/> Brand To The <br/> Next Level</strong></h1>
            <br/>
            <p className="text-dark">Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Dolore eveniet necessitatibus et <br/> iusto corrupti minima.</p>
            <br/>
            <Link to="/allServices"><button className="text-white" style={{width:'170px', height: '45px', backgroundColor:'#111430', borderRadius: '5px'}}>Hire Us</button></Link>
        </div>
        <div className="col-md-6 col-sm-6 col-12">
            <img src={bannerFrame} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;