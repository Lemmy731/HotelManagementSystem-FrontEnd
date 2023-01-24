import React from 'react';
import './Footer.css';

function Footer() {
  return (
        <div className='container-footer'>
            <div id='oneF'>
                <p className='footerCol1'>
                Lorem ipsum dolor amet, 
                consectetur adipiscing elit. 
                Eget nisl nunc quam ac sed turpis volutpat. 
                Cursus sed massa non nisi, placerat.
                <br/>
                <br/>
                  
                    <i class="fa-brands fa-instagram fa-icons"></i>
                    <i class="fa fa-globe fa-icons"></i>  
                    <i class="fa-brands fa-twitter fa-icons"></i> 
                    <i class="fa-brands fa-youtube fa-icons"></i>      


                </p>
            </div>
            <div id='twoF'>
                <h3>Quick Links</h3>
                <p>Portfolio</p>
                <p>Blogs</p>
                <p>About</p>
                <p>Press</p>
                <p>Careers</p>
            </div>
            <div id='threeF'>
                <h3>Services</h3>
                <p>Hotel Bookings</p>
                <p>Spots Rental</p>
            </div>
            <div id='fourF'>
                <h3>Reach us</h3>
                <p><i className="fa-solid fa-envelope"></i> hello@decagon.com</p>
                <p><i class="fa fa-mobile"></i> +234 810 3630 834</p>
                <p> <i class="fa-solid fa-location-dot"></i> Decagon Head Quarters <br/>Lagos</p>
            </div>
        </div>
  )
}

export default Footer
