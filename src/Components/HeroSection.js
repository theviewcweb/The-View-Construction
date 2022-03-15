import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>LET US CREATE YOUR VIEW</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--whiteoutline"
                    buttonSize="btn--large"
                >
                    ABOUT US
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
