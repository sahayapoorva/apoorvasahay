import React from "react";
import "./school.css";

const School = props => {
  return (
    <div>
      <header className="header-container">
        <p className="header-name">{props.degree}</p>
        <p className="header-date">
          {props.startDate}-{props.endDate}
        </p>
      </header>
      <main className="school-name">
        <p>{props.schoolName}</p>
      </main>
      <footer className="gpa">
        <p>{props.gpa}</p>
      </footer>
    </div>
  );
};

export default School;
