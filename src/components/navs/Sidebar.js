import React from 'react';
import NavLink from './NavLink';
import '../../componentCSS/Sidebar.css'

export default function Sidebar(){
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    
    return(
        <>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">Dashboard</a>
                <a href="#">Hotels</a>
                <a href="#">Manager</a>
                <a href="#">Transactions</a>
            </div>
            <NavLink/>           
        </>
    );
}