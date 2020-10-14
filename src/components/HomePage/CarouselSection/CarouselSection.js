import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import carouselOne from '../../../images/carousel-1.png';
import carouselTwo from '../../../images/carousel-2.png';
import carouselThree from '../../../images/carousel-3.png';
import carouselFour from '../../../images/carousel-4.png';
import carouselFive from '../../../images/carousel-5.png';

const CarouselSection = () => {
    return (
      <div style={{backgroundColor:'#111430', height:'600px', paddingTop:'100px'}}>
         <h1 style={{marginBottom:'50px', fontWeight: '600px'}} className='text-center text-white'>Here are some of <span style={{color:'#7AB259'}}>our works</span></h1>
         <Carousel>
         <Carousel.Item>
          <img style={{height:'335px', width:'465px', marginLeft:'150px'}}
            src={carouselOne}
            alt=""
          />
          <img style={{height:'335px', width:'465px', marginLeft:'120px'}}
            src={carouselTwo}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'335px', width:'465px', marginLeft:'150px'}}
            src={carouselThree}
            alt=""
          />
          <img style={{height:'335px', width:'465px', marginLeft:'120px'}}
            src={carouselFour}
            alt=""
          />
        </Carousel.Item>
         <Carousel.Item>
          <img style={{height:'335px', width:'465px', marginLeft:'150px'}}
            src={carouselFive}
            alt=""
          />
          <img style={{height:'335px', width:'465px', marginLeft:'120px'}}
            src={carouselOne}
            alt=""
          />
        </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default CarouselSection;