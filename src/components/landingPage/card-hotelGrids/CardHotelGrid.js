import React from 'react';
import './CardHotelGrid.css';
import image1 from '../../../assets/Images-landingPage/gridHotel1.png';
import image2 from '../../../assets/Images-landingPage/gridHotel2.png';
import image3 from '../../../assets/Images-landingPage/gridHotel3.png';
import image4 from '../../../assets/Images-landingPage/gridHotel4.png';
import image5 from '../../../assets/Images-landingPage/gridHotel5.png';
import image6 from '../../../assets/Images-landingPage/gridHotel6.png';


function CardHotelGrid() {
  return (
    <div>
        <h1 id='h1heading'>Hotels Across Nigeria</h1>
        <div className='card_grid_container'>
            <div id='one' className='gridImgDiv1'>
                <img className ='gridImg gridHotelImg1' src={image1} />
                <p className ='gridHotelName1'>Prestige Hotel</p>
                <p className ='gridHotelLocation1'>Benin</p>
            </div>
            <div id='two' className='gridImgDiv2'>
                <img className='gridImg gridHotelImg2' src={image2} />
                <p className ='gridHotelName2'>Royal Hills</p>
                <p className ='gridHotelLocation2'>Abuja</p>
            </div>
            <div id='three' className='gridImgDiv3'>
                <img className='gridImg gridHotelImg3' src={image3} />
                <p className ='gridHotelName3'>Decagon Bliss</p>
                <p className ='gridHotelLocation3'>Lagos</p>
            </div>
            <div id='four' className='gridImgDiv4'>
                <img className='gridImg gridHotelImg4' src={image4} />
                <p className ='gridHotelName4'>Railers Dome</p>
                <p className ='gridHotelLocation4'>Ibadan</p>
            </div>
            <div id='five' className='gridImgDiv5'>
                <img className='gridImg' src={image5} />
                <p className ='gridHotelName5'>Kailers Monti</p>
                <p className ='gridHotelLocation5'>Lagos</p>
            </div>
            <div id='six' className='gridImgDiv6'>
                <img className='gridImg' src={image6} />
                <p className ='gridHotelName6'>Kailers Monti</p>
                <p className ='gridHotelLocation6'>Lagos</p>
            </div>     
        </div>
    </div>
    
  )
}

export default CardHotelGrid

