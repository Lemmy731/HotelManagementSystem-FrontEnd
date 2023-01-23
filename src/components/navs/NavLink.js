import React from 'react';
import Navbar from './Navbar';

export default function NavLink(){

    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    //     document.getElementById("main").style.marginLeft = "250px";
    // }
    
    return(
        <>
             <Navbar/>
             <div id="main">
            {/* <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
            <p> ...main page </p>
            </div>
        </>
    );
}