import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>   
            <p id="mainLogo">Potluck Planner</p>
            <div id="navbar">
                <Link to="/" id="nav-home">HOME</Link>
                <Link to="/login" id="nav-login">LOGIN</Link>
                <Link to="/signup" id="nav-signup">SIGN UP</Link>
                <Link to="/events" id="nav-events">EVENTS</Link>
            </div>
        </div>
    )
}

export default Header;
