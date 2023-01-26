import React from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import '../../style/Booking.css';
const Booking = () => {
  return (
    <div className='booking-container'>
        <h1>
            BOOKING
        </h1>
        <Input />
       <div className="btn-box">
       <Button text="Book"/>
       </div>
    </div>
  )
}

export default Booking