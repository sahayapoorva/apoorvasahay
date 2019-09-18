import React from "react";
import "./skill.css";

const Skill = props => {
  return (
    <div className="container">
      <div className="name" style={{ flexBasis: props.completion }}>
        {props.name}
      </div>
      <div className="completion">{props.completion}</div>
    </div>
  );
};

export default Skill;
