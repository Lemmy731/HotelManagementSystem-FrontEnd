import React from 'react';

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
                        <span style={{"font-size":"30px","cursor":"pointer"}} onClick={openNav}>&#9776; open</span>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div className="right-nav">
                        <div className="bell">
                            bell
                        </div>
                        <div className="name">
                            name
                        </div>
                        <div className="profile">
                            profile
                        </div>
                    </div>
                    
               
                </nav>
            </header>
        </>
    );
}