import React from "react";
import "./school.css";

const School = props => {
  return (
    <div className="container-padding">
      <header className="header-container">
        <h2 className="header-name">{props.degree}</h2>
        <h2 className="header-date">
          {props.startDate}-{props.endDate}
        </h2>
      </header>
      <main className="school-name">
        {props.schoolName}
      </main>
      <footer className="gpa">
        {props.gpa}
      </footer>
    </div>
  );
};

export default School;
