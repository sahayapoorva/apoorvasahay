import React from "react";
import School from "../school/school";
import "./education.css";

const Education = props => {
  return (
    <div className="card">
      <header className="list-header">
        <p>Education</p>
      </header>
      <hr/>
      <main>
        {props.schools.map((school,index) => (
            index !== props.schools.length -1?<div><School {...school} /> <hr/></div>:<div className="hr-padding"><School {...school}/></div>
        ))}
      </main>
    </div>
  );
};

export default Education;
