import React from "react";
import School from "../school/school";
import "./education.css";

const Education = props => {
  return (
    <div>
      <header className="list-header">
        <p>Education :</p>
      </header>
      <main>
        {props.schools.map(school => (
          <School {...school} />
        ))}
      </main>
    </div>
  );
};

export default Education;
