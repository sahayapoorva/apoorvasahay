import React from "react";
import Skill from "../skill/skill";
import "./skillList.css";

const SkillList = props => {
  return (
    <div>
      <header className="list-header">
        <p>Skills: </p>
      </header>
      {props.skills.map(skill => (
        <Skill name={skill.name} completion={skill.percentage} />
      ))}
    </div>
  );
};

export default SkillList;
