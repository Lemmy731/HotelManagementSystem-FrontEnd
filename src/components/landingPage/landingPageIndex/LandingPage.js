import React from 'react';
import NavbarLanding from '../navbarLanding/NavbarLanding';
import HeroSection from '../heroSection/HeroSection';
import Cards from '../card-deals/Cards';
import CardHotelGrid from '../card-hotelGrids/CardHotelGrid';
import HotelQuote from '../hotelquote/HotelQuote';
import ContactUs from '../contactUs/ContactUs';
import Footer from '../footer-component/Footer';
import CcFooter from '../ccFooter-component/CcFooter';

function LandingPage() {
  return (
    <div >
      <NavbarLanding/>
      <HeroSection/>
      <Cards/>
      <CardHotelGrid/>
      <HotelQuote/>
      <ContactUs/>
      <Footer/>
      <CcFooter/>
    </div>
  )
}

export default LandingPage