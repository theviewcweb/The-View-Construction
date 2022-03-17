import React from "react";
import "../../App.css";
import "./Tips.css";

function OurTips() {
    return (
        <>
            <div className="tips">
                <h1 className="tips-header">TIPS</h1>
            </div>
            <div className="mid-tips">
                <div className="tips-content">
                    <div className="tips-p">
                        <h1>Maintenance</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Officia rerum sunt dolor fugit vero eos
                            eveniet beatae maxime esse nisi sed saepe
                            voluptatum, labore numquam. Recusandae, autem
                            consectetur! Reprehenderit temporibus doloremque
                            ipsa culpa obcaecati aut quibusdam distinctio
                            perferendis incidunt ratione facilis porro minima
                            tempore nisi necessitatibus dolorem, vitae
                            repudiandae nesciunt!
                        </p>
                    </div>
                    {/* <img className="image-home" src={pool} alt="Man" /> */}
                </div>
            </div>
        </>
    );
}

export default OurTips;
