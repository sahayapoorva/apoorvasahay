import React from "react";
import Skill from "../skill/skill";
import Card from "../card/Card";
import "./skillList.css";

const SkillList = props => {
  return (
    <Card cardName="Skills">
        {props.skills.map(skill => (
            <Skill name={skill.name} value={skill.percentage} />
        ))}
    </Card>
  );
};

export default SkillList;
