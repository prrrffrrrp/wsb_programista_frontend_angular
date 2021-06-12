import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar" role="navigation">
            <nav>
                <NavLink className="navbar-item" to="/profile">Profile</NavLink>
                <NavLink className="navbar-item" to="/chat">Chat</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;
