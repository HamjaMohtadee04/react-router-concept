import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
           
            <nav>
                <span>Website</span>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
                <Link to='/'>Home</Link>
                {/* <NavLink to="/Users">Users</NavLink> */}
                <NavLink to='/Users'>Users</NavLink>
                <Link to ='/about'>About</Link>
                <Link to ='/Contact'>Contact</Link>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;