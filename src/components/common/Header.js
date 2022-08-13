import {NavLink} from "react-router-dom";
const Header = function(){
    
    return (
        <nav>
            <NavLink to="/" style={(isActive) =>({color: isActive ? 'orange': 'red'})}>Home</NavLink> | 
            <NavLink to="/courses" style={(isActive) =>({color: isActive ? 'orange': 'red'})}>Courses</NavLink> | 
            <NavLink to="/about" style={(isActive) =>({color: isActive ? 'orange': 'red'})}>About</NavLink>
        </nav>
    );
}
export default Header;