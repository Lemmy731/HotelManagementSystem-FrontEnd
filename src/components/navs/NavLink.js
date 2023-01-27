import React from 'react';


export default function NavLink(props){  
    
    return(
        <>
             <div id="main">
                {props.children}
            </div>
        </>
    );
}