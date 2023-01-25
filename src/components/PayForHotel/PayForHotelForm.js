import React from 'react';

import bgImg from '../../assets/images.jfif';


export  function PayForHotelForm(){
    return(
        
        <header className='pay-header'>
            <div className='pay-title'>
            <h2 className='pay-title-name'>Hotel Payment Form</h2>
            </div>
              
            <div className="pay-container">
            <div className='pay-left'>
            <h3 className='pay-h3'>Billing Address</h3>
            <form id='pay-form' >
                First Name
            <input type='text' name='' placeholder='First Name' required/>
            Last Name
            <input type='text' name='' placeholder='Last Name' required/>
            Email
            <input type='text' name='' placeholder='E-mail' required />
            Address Line 1
            <input type='text' name='' placeholder='Address Line 1' required />
            Address Line 2
            <input type='text' name='' placeholder='Address Line 2'/>
            City
            <input type="text" name='' placeholder='City'/>
            <div id='pay-zip'>
                <label>
                    State
                    <select>
                        <option>Choose State...</option>
                        <option>Lagos</option>
                        <option>Rivers</option>
                        <option>Abuja</option>
                        <option>Anambra</option>
                        <option>Calabar</option>
                    </select>
                    </label>
                    <label>
                        Zip Code
                        <input className='pay-input' type='number' name='' placeholder='Zip Code' />
                    </label>
                
            </div>
            </form>
            </div>
            
            <div class="pay-right">
                <br/>
                <h3>Payment</h3>
                
                <form id='pay-form' className='flex flex-col'>
                Accepted Card Payment Methods <br/>
                <img src={bgImg} className='pay-img' alt=''/>
                <br/>
                
                 Card Number
                <input type='text' name='' placeholder='Card Number' required/>
                Expiry Month
                <input type='text' name='' placeholder='Expiry Month' required />
                <div id='pay-zip'>
                    <label>
                        Expiry Year
                        <select>
                            <option>Choose Year...</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                        </select>
                    </label>
                    <div>
                        <p className='pay-cvv'>CVV</p>   
                        <input className='pay-input2' type='number' name='' placeholder='Enter Your CVV' />  
                    </div>
                    
                </div>
            </form>
            
                <form id='pay-promo'>
                Promo Code
                        <input type='number' name='' placeholder='Promo Code' />
                </form>
                <input className='pay-submit' type='submit' name="" value="Pay For Hotel"/>
            </div>
            </div> 
        </header>
        
    )
}