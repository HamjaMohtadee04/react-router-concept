import { Link } from 'react-router-dom';
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
                <Link to="/Users">Users</Link>
                <Link to ='/about'>About</Link>
                <Link to ='/Contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;