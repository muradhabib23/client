import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mobile from '../../../images/icons/service1.png';
import graphic from '../../../images/icons/service2.png';
import web from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetaile/ServiceDetail';

const serviceData = [
    {
        name: 'Web & Mobile Design',
        img: mobile,
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        name: 'Graphic Design',
        img: graphic,
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        name: 'Web Development',
        img: web,
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const Services = () => {
    const [order, setOrder] = useState({});
    return (
        <div style={{marginBottom:'100px'}}>
           <div>
           <h1 style={{fontWeight: '600px'}} className='text-center'>Provide awesome <span style={{color:'#7AB259'}}>services</span></h1>
           </div>
           <div className="d-flex justify-content-center">
               <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
               </div>
           </div>
           <br/>
           <Link to="/services"><h4 className='text-center'><span style={{color:'#7AB259'}}>Explore</span> <span className='text-dark'>more</span></h4></Link>
        </div>
    );
};

export default Services;