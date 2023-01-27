import React, {useState} from 'react';
import Bell from '../../../src/assets/Bell.svg';
import Dropdown from '../../../src/assets/Drop-down.svg';
import Profile from '../../../src/assets/Profile.jpg';
import { Link } from 'react-router-dom';
import '../../style/ProfileDropDown.css';

export default function Navbar(){
    const [open, setOpen] = useState(false);
    // const closedropDown =() => setOpen(false);

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    return(
        <>
            <header>
                <nav className='nav'>
                    <div className="menu">
                        {/*Use any element to open the sidenav*/}
                        <span style={{"padding":"5px","cursor":"pointer","background":"#2067A1","border-radius":"5px", "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} onClick={openNav}>&#9776;</span>
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
                            {/* <img src={Profile} alt="Your SVG" style={{"width":"50px","border-radius":"50%"}}/> */}

                       <div className="dropdow-App">
                            <div className="menu-container">
                                <div className='menu-trigger' onClick={() => {setOpen(!open)}}>   
                                                 <img  className='dropdownImg' src={Profile} style={{"width":"50px","border-radius":"50%"}} /> 
                                     </div>
                                                
                                        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >  
                                             <h3 className='dropdown-h3'>Profile<br/><span className='dropdown-span'>Website Designer</span>
                                        </h3> 
                                         <ul className='dropdown-ul'>  
                                               <DropdownItem img = {""} text = {"Picture"} />                    <DropdownItem img = {""} text = {"Profile"} />                    <DropdownItem img = {""} text = {"Settings"} /> 
                                               <DropdownItem img = {""} text = {"Sign out"} />  
                                        </ul>           
                                </div>        
                                </div>   
                        </div>


                        </div>
                    </div>              
                </nav>
            </header>
        </>
    );
}

function DropdownItem(props) {
    return(
        <li className='dropdownItem'>
            <img src={props.img}></img>
              <a> {props.text} </a>        
        </li> 
           )
}