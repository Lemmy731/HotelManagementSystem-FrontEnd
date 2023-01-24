import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import  image1 from '../../../../src/assets/Images-landingPage/Image1.png'
import  image2 from '../../../../src/assets/Images-landingPage/Image2.png'

function HeroSection() {
  return (
    <div  className='hero-container'>
      <div className='hero-item'>
        <h1 className='hero-h1'>
            Affordable <br/>
            Luxury Meets <br/>
            Convenience
        </h1>
        <p className='hero-p'>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
        </p>
        <Link to='/' className='play'>
            <i class="fa fa-circle-play"></i> --------- DISCOVER
        </Link>
      </div>
      <div className='hero_images_container'>
            <img src={image1} alt="example image" className='hero_front_image'/>
            <img src={image2} alt="Back Image" className='hero_back_image'/>
      </div>
    </div>
  )
}

export default HeroSection
