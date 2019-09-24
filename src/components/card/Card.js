import React from "react";

import "./Card.css";

const getFlex = (grow) => {
    let cssClass = "card-container ";
    switch(grow) {
        case 3:
            cssClass = cssClass + "flexGrow3";
            break;
        default:
            cssClass = cssClass +  "flexGrow1";
    }

    return cssClass;
};

const Card = props => {
    return (
        <div className={getFlex(props.grow)}>
            <h1>{props.cardName}</h1>
            <div className="seperator" />
            {props.children}
        </div>
    );
};

export default Card;
