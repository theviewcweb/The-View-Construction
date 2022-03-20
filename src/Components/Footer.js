import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import top from "./top";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <p className="footer-about">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti maxime, aut nobis quos accusantium
                            amet quia corporis dolorem eaque cumque inventore
                            perspiciatis!
                        </p>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <p className="contact">
                            281-541-6706
                            <br />
                            theviewc@gmail.com
                            <br />
                            15824 Grant Rd,
                            <br />
                            Cypress, TX 77429
                        </p>
                    </div>
                    <div className="footer-link-items">
                        <h2>Explore</h2>
                        <Link to="/pools" onClick={top}>
                            Pools
                        </Link>
                        <Link to="/landscapes" onClick={top}>
                            Lanscapes
                        </Link>
                        <Link to="/nursery" onClick={top}>
                            Nursery
                        </Link>
                        <Link to="/tips" onClick={top}>
                            Tips
                        </Link>
                        <Link to="/contact-us" onClick={top}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link
                            to="/The-View-Construction"
                            className="social-logo"
                        >
                            The View Construction
                        </Link>
                    </div>
                    <small className="website-rights">
                        The View Construction © 2022
                    </small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            className="social-icon-link tiktok"
                            to="/"
                            target="_blank"
                            aria-label="TikTok"
                        >
                            <i className="fab fa-tiktok"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
