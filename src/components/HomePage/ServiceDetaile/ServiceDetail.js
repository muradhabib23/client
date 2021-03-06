import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
           <Link to="/order">
            <img style={{height: '74px', width:'74px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
           </Link>
        </div>
    );
};

export default ServiceDetail;