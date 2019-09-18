import React from "react";
import Address from "../address/address";
import SocialPlatform from "../social-platform/social-platform";
import "./avatar.css";

const Avatar = props => {
  return (
    <div className="avatar-container">
      <div className="profile-container">
        <img
          className="profile-image"
          src={props.img.src}
          alt={props.img.altText}
        />
        <p>{props.name}</p>
        <div className="social-container">
          {props.socials.map(social => (
            <SocialPlatform {...social} />
          ))}
        </div>
      </div>
      <Address {...props.address} />
    </div>
  );
};

export default Avatar;
