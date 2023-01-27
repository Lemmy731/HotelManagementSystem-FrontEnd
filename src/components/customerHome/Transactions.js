import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import Navbar from '../navs/Navbar';
import UserTransactions from './usertransaction/UserTransactions';


export default function Manager(){  
    
    return(
        <>
            <Navbar/>
              <NavLink>
                <UserTransactions/>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </>
    );
}