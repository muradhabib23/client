import React from 'react';
import BusinessPartner from '../BusinessPartner/BusinessPartner';
import CarouselSection from '../CarouselSection/CarouselSection';
import Contact from '../Contact/Contact';
import Feedbacks from '../Feedbacks/Feedbacks';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {
    return (
      <div>
            <Header></Header>
            <BusinessPartner></BusinessPartner>
            <Services></Services>
            <CarouselSection></CarouselSection>
            <Feedbacks></Feedbacks>
            <Contact></Contact>
      </div>
    );
};

export default Home;
