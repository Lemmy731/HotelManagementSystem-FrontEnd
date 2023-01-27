import React from 'react';
import '../../style/Sidebar.css';
import Dashboard from '../../../src/assets/Dashboard.svg';
import Hotel from '../../../src/assets/Hotel.svg';
import Manager from '../../../src/assets/Manager.svg';
import Transaction from '../../../src/assets/Transaction.svg';
import Logout from '../../../src/assets/Logout.svg';
import {Link} from 'react-router-dom';


export default function Sidebar({roleValue}){
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    
    let dashboard;
    let hotel;
    let plug;
    let transaction;

    if(roleValue === "Customer"){
        dashboard = "customer-dashboard";
        hotel = "customer-hotel";
        plug = "customer-manager";
        transaction = "customer-transaction";

    }else if(roleValue === "Admin"){
        dashboard = "admin-dashboard";
        hotel = "admin-hotels";
        plug = "admin-manager";
        transaction = "admin-transaction";

    }else if(roleValue === "Manager"){
        dashboard = "manager-dashboard";
        hotel = "manager-hotel"
        plug = "manager-bookings"
        transaction = "manager-transaction";
    }else{
        dashboard = "";
        hotel = "";
        plug = "";
        transaction = "";
    }

    
    return(
        <> 
            <div id="mySidenav" className="sidenav">
                <div>
                    <Link href="" className="closebtn" onClick={closeNav}>&times;</Link>
                </div>
                <div>
                    <Link to={"/" + dashboard} className="tab" ><img src={Dashboard} alt="Your SVG"/>
                        <div>Dashboard</div>
                    </Link>
                </div>
                <div>
                    <Link to={"/" + hotel} className="tab"><img src={Hotel} alt="Your SVG"/> 
                      <div>Hotels</div>
                    </Link>
                </div>
                <div>
                    <Link to={"/" +plug} className="tab"><img src={Manager} alt="Your SVG"/> 
                        <div>{roleValue === "Customer" || roleValue === "Admin" ? roleValue === "Customer"?"Manager":"Manager":"Bookings"}</div>
                    </Link>
                </div>
                <div>
                    <Link to={"/" + transaction} className="tab"><img src={Transaction} alt="Your SVG"/>
                        <div>Transactions</div>
                    </Link>
                </div>
                <div className="logout"> 
                    <div>
                        <Link to="/logout">Logout <img src={Logout} alt="Your SVG"/> </Link>
                    </div>                    
                </div>               
            </div>         
        </>
    );
}
