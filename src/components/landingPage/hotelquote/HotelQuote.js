import React from 'react';
import './HotelQuote.css';
import hotelQ1 from '../../../assets/Images-landingPage/hotelQuote1.png';
import hotelQ2 from '../../../assets/Images-landingPage/hotelQuote2.png';
import whiteBg from '../../../assets/Images-landingPage/whitebackground.png';


function HotelQuote() {
  return (
    <div className='containerQuote'>
        <div id='pix1'>
            <img src={hotelQ1} alt='hotel quote' className='hotelq1_img'/>
            <p id='pchild'><span>"</span>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>           
        </div>

        <div id='pix2'>
            <img src={hotelQ2} alt='hotel quote' className='hotelq2_img'/>
        </div>      
    </div>
  )
}

export default HotelQuote
