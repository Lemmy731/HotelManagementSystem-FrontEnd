import React from 'react';
import Bell from '../../../src/assets/Bell.svg';
import Dropdown from '../../../src/assets/Drop-down.svg';
import Profile from '../../../src/assets/Profile.jpg';

export default function Navbar(){
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    return(
        <>
            <header>
                <nav>
                    <div className="menu">
                        {/*Use any element to open the sidenav*/}
                        <span style={{"padding":"5px","cursor":"pointer","background":"#2067A1","border-radius":"5px"}} onClick={openNav}>&#9776;</span>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                    <div className="right-nav">
                        <div className="bell">
                            <img src={Bell} alt="Your SVG" />
                        </div>
                        <div className="name">
                            Ekenedilichukwu Mathew Obiasogu
                            <img src={Dropdown} alt="Your SVG" style={{"padding-left":"10px"}}/>
                        </div>
                        <div className="profile">
                            <img src={Profile} alt="Your SVG" style={{"width":"50px","border-radius":"50%"}}/>
                        </div>
                    </div>              
                </nav>
            </header>
        </>
    );
}