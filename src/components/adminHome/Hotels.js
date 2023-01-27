import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';

export default function Hotels() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <div> Admin</div>
                <div>Hotels</div>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </>
        
    )
}