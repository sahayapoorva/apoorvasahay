import React from "react";
import { useSpring, animated } from "react-spring";

import './skill.css';

const Skill = props => {
  const computedWidth = useSpring({
    width: props.value,
    from: {
      width: "0%"
    }
  });
  return (
    <div className="skillContainer">
      <div className="fillContainer">
        <animated.div className="fill" style={computedWidth}>
          <div className="name">{props.name}</div>
        </animated.div>
      </div>
      <div className="value">{props.value}</div>
    </div>
  );
};

export default Skill;
