import React from 'react';
import EmailForm from '../email-form/EmailForm';
import contactImg from '../../../assets/Images-landingPage/contactHotel.png';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='contact-container contact-image-container'>
        <img className='contact_img' id='contactImg' src={contactImg}/> 
        <h5 className='contacth2'>Contact Us</h5>
        <p className='contactP'>Lorem ipsum dolor sit amet eam quas malorum accusam</p>
        <EmailForm/>       
    </div>
  )
}

export default ContactUs
