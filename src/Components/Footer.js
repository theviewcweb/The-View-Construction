import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Connect With Us To See How We Can Help You
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            class="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to="/">Lorem, ipsum.</Link>
                        <Link to="/">Lorem, ipsum.</Link>
                        <Link to="/">Lorem, ipsum.</Link>
                        <Link to="/">Lorem, ipsum.</Link>
                        <Link to="/">Lorem, ipsum.</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">Lorem, ipsum.</Link>
                        <Link to="/">Lorem, ipsum.</Link>
                        <Link to="/">Lorem, ipsum.</Link>
                        <Link to="/">Lorem, ipsum.</Link>
                        <Link to="/">Lorem, ipsum.</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            The View Construction
                        </Link>
                    </div>
                    <small className="website-rights">
                        The View Construction © 2022
                    </small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                            className="social-icon-link linkedin"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
