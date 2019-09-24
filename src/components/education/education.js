import React from "react";
import School from "../school/school";
import Card from "../card/Card";
import "./education.css";

const Education = props => {
  return (
        <Card grow={props.grow} cardName="Education">
            {props.schools.map((school) => (
                <School {...school} />
            ))}
        </Card>
  );
};

export default Education;
