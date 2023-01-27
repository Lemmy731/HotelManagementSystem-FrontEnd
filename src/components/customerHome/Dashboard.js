import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';

export default function Dashboard() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <div> customer</div>
                <div>Home</div>
            </NavLink> 
            <Sidebar roleValue={"Customer"}/>
        </>
        
    )
}
