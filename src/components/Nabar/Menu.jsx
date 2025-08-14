import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'; // Assuming you have a CSS file for styling
import Logo from './Assets/logo.png';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="menu">
                <img src={Logo} alt="Image" className="logo" />
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={menuOpen ? "open" : ""}>
                    <ul>
                        <li><NavLink to={'/'} className={'nav'}>Home</NavLink></li>
                        <li><NavLink to={'/About'} className={'nav'}>About Us</NavLink></li>
                        <li><NavLink to={'/Gallery'} className={'nav'}>Gallery</NavLink></li>
                        <li><NavLink to={'/Packages'} className={'nav'}>Packages</NavLink></li>
                        <li><NavLink to={'/Contactus'} className={'nav'}>Contact Us</NavLink></li>
                    </ul>
                </nav>
                <div className='search-box'>
                    <input type="text" placeholder="search" />
                    <i className="fas fa-search"></i>
                </div>
                <div className="login">
                    <NavLink to="/Login" className="login-btn">Login / Sign Up</NavLink>
                </div>
            </div>
        </>
    );
}

export default Menu;
