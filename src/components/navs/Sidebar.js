import React from 'react';
import NavLink from './NavLink';
import '../../style/Sidebar.css';
import Dashboard from '../../../src/assets/Dashboard.svg';
import Hotel from '../../../src/assets/Hotel.svg';
import Manager from '../../../src/assets/Manager.svg';
import Transaction from '../../../src/assets/Transaction.svg';
import Logout from '../../../src/assets/Logout.svg';


export default function Sidebar(){
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    
    return(
        <>
            <NavLink/>  
            <div id="mySidenav" className="sidenav">
                <div>
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                </div>
                <div>
                    <a href="#" className="tab" ><img src={Dashboard} alt="Your SVG"/>
                        <div>Dashboard</div>
                     </a>
                </div>
                <div>
                    <a href="#" className="tab"><img src={Hotel} alt="Your SVG"/> 
                      <div>Hotels</div>
                    </a>
                </div>
                <div>
                    <a href="#" className="tab"><img src={Manager} alt="Your SVG"/> 
                        <div>Manager</div>
                    </a>
                </div>
                <div>
                    <a href="#" className="tab"><img src={Transaction} alt="Your SVG"/>
                        <div>Transactions</div>
                    </a>
                </div>
                <div className="logout"> 
                    <div>
                        <a href="#">Logout <img src={Logout} alt="Your SVG"/> </a>
                    </div>                    
                </div>               
            </div>         
        </>
    );
}