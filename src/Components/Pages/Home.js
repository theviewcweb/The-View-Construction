import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import pool from "../../images/stock_pool.jpg";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="home">
                <HeroSection />
                <Cards />
                <div className="mid-home">
                    <div className="home-content">
                        <div className="home-me-p">
                            <h1>HERE ARE SOME THINGS ABOUT US!</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Officia rerum sunt dolor fugit
                                vero eos eveniet beatae maxime esse nisi sed
                                saepe voluptatum, labore numquam. Recusandae,
                                autem consectetur! Reprehenderit temporibus
                                doloremque ipsa culpa obcaecati aut quibusdam
                                distinctio perferendis incidunt ratione facilis
                                porro minima tempore nisi necessitatibus
                                dolorem, vitae repudiandae nesciunt!
                            </p>
                        </div>
                        <img className="image-home" src={pool} alt="Man" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
