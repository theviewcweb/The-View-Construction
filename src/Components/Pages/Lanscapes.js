import React from "react";
import "../../App.css";
import "./Landscapes.css";

function Landscapes() {
    return (
        <>
            <div className="landscapes">
                <h1 className="landscapes-header">LANDSCAPES</h1>
            </div>
            <div className="mid-landscapes">
                <div className="landscapes-content">
                    <div className="landscapes-p">
                        <h1>Landscapes</h1>
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

export default Landscapes;
