import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';

export default function Hotels() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <div> Manager</div>
                <div>Hotels</div>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </>
    )
}