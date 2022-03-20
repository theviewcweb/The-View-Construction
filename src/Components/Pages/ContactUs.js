import React from "react";
import "../../App.css";
import "./ContactUs.css";

function ContactUs() {
    return (
        <>
            <div className="contact-us">
                <div className="contact-content">
                    <p>
                        15824 Grant Rd,
                        <br />
                        Cypress, TX 77429
                        <br />
                        <br />
                        Hours: Mon-Fri: 9:00AM - 5:00PM
                    </p>
                </div>
                <div>
                    <p className="contact-us-header">CONTACT US</p>
                </div>
                <div className="contact-content">
                    <p>
                        Phone: 281-541-6706
                        <br />
                        Email: theviewc@gmail.com
                    </p>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
