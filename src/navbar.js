import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Your Logo</div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>

            </ul>
        </nav>
    );
};

export default Navbar;