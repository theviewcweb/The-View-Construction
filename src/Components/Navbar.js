import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/The-View-Construction/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        <img
                            className="logo"
                            src={logo}
                            alt="The View logo"
                            path="/The-View-Construction/"
                        />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/pools"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Pools
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/landscapes"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Landscapes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/nursery"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Nursery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/tips"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Tips
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact-us"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
