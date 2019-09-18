import React from "react";
import "./experience.css";

const Experience = props => {
  return (
    <div className="experience-container">
      <header className="header-container">
        <p className="header-name">
          {props.name}, {props.location}
        </p>
        <p className="header-date">
          {props.startDate} - {props.endDate}
        </p>
      </header>
      <main className="experience-content">
        <p className="experience-designation">{props.designation}</p>
        <ul>
          {props.highlights.map(highlight => (
            <li className="experience-highlight">{highlight}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Experience;
