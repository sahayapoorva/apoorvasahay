import React from "react";
import School from "../school/school";
import "./education.css";
import Card from "../card/Card";

const Education = props => {
  return (
        <Card grow={props.grow} cardName="Education">
            {props.schools.map((school, index) => (
              <div>
                <School {...school} />
                {index+1 !== props.schools.length?<div className="seperator"/>:null}
              </div>
            ))}
        </Card>
  );
};

export default Education;
