import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import card1 from "../images/IMG_0667.jpg";
import card2 from "../images/IMG_0670.jpg";
import card3 from "../images/IMG_3309.jpg";

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={card2}
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus."
                            label="Pools"
                            path="/pools"
                        />
                        <CardItem
                            src={card1}
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus."
                            label="Landscapes"
                            path="/landscapes"
                        />
                        <CardItem
                            src={card3}
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, possimus."
                            label="Tips"
                            path="/tips"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
