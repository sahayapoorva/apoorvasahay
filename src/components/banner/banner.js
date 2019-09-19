import React from 'react';
import Address from "../address/address";
import './banner.css';
import PhoneNumber from "../phoneNumber/phoneNumber";

const Banner = props => {
    return <div className="banner-container">
        <h1>{props.name}</h1>
        <Address {...props.address}/>
        <PhoneNumber phonenumber={props.phonenumber}/>
    </div>
}

export default Banner;