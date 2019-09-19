import React from "react";
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
        </div>
        <div className="social-container">
            {props.socials.map(social => (
                <SocialPlatform {...social} />
            ))}
        </div>
    </div>
  );
};

export default Avatar;
