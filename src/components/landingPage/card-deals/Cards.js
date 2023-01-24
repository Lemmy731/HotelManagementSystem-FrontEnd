import React from 'react';
import CardItem from './CardItem';
import './Card.css';
import Hotel1 from '../../../assets/Images-landingPage/Hotel1.png';
import Hotel2 from '../../../assets/Images-landingPage/Hotel2.png';
import Hotel3 from '../../../assets/Images-landingPage/Hotel3.png'


function Cards() {
  return (
    <div className='cards'>
      <div className='deals_text'>
      <h1 className='deals_h1'>Top Deals</h1>
      <p className='deals_p'>Amazing Offers Only for you</p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src={Hotel1}
                
                // lable='Adventure'
                path='/services'
                />
                <CardItem
                src={Hotel2}
                
                // lable='Adventure'
                path='/services'
                />
                <CardItem
                src={Hotel3}
                
                // lable='Adventure'
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
