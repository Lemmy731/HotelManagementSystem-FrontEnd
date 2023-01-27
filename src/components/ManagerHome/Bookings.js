import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';

export default function Bookings() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <div>Bookings</div>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </>
        
    )
}