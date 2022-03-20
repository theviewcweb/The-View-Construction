import React from "react";
import top from "./top";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards() {
    return (
        <div class="container">
            <Link to="/pools" onClick={top}>
                <div class="card card0">
                    <div class="border">
                        <h2 className="card0-h2">Pools</h2>
                    </div>
                </div>
            </Link>
            <Link to="/landscapes" onClick={top}>
                <div class="card card1">
                    <div class="border">
                        <h2>Landscapes</h2>
                    </div>
                </div>
            </Link>
            <Link to="/tips" onClick={top}>
                <div class="card card2">
                    <div class="border">
                        <h2>Tips</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Cards;
