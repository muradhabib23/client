import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airBnb from '../../../images/logos/airbnb.png'

const BusinessPartner = () => {
    return (
        <div style={{marginTop:'100px', marginBottom:'200px'}} className= "text-center">
             <img className='mr-5' style={{height:'36px', width:'140px'}} src={slack} alt=""/>
             <img className='mr-5' style={{height:'44px', width:'129px'}} src={google} alt=""/>
             <img className='mr-5' style={{height:'56px', width:'99px'}} src={uber} alt=""/>
             <img className='mr-5' style={{height:'67px', width:'120px'}} src={netflix} alt=""/>
             <img className='mr-5' style={{height:'51px', width:'161px'}} src={airBnb} alt=""/>
        </div>
    );
};

export default BusinessPartner;