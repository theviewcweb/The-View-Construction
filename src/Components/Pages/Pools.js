import React from "react";
import "../../App.css";
import "./Pools.css";

function Pools() {
    return (
        <>
            <div className="pools">
                <h1 className="pools-header">POOLS</h1>
            </div>
            <div className="mid-pools">
                <div className="pools-content">
                    <div className="pools-p">
                        <h1>Pools</h1>
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

export default Pools;
