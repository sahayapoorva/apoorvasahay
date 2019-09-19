import React from "react";
import "./address.css";

const Address = props => {
  return (
    <div className="address-container">
        <p>{props.address1}, {props.address2}</p>
        <p>{props.city}, {props.state} - {props.zip}</p>
    </div>
  );
};

export default Address;
