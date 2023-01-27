import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';

export default function Manager() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <div> Admin</div>
                <div>Manager</div>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </>
        
    )
}