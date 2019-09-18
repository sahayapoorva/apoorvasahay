import React from "react";
import "./social-platform.css";

const SocialPlatform = props => (
  <div className="social-container">
    <a href={props.href}>
      <img src={props.img.src} alt={props.img.altText} />
    </a>
  </div>
);

export default SocialPlatform;
