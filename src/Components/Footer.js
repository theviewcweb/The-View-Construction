import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Connect With Us To See How We Can Help You
                </p>
                <p className="footer-subscription-text">Phone: 281-541-6706</p>
            </section>
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
