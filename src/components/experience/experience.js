import React from "react";
import "./experience.css";

const Experience = props => {
  return (
    <div className="container-padding">
      <header className="header-container">
        <h2 className="header-name">
          {props.name}, {props.location}
        </h2>
        <h2 className="header-date">
          {props.startDate} - {props.endDate}
        </h2>
      </header>
      <main className="experience-content">
        <p className="experience-designation">{props.designation}</p>
        <ul>
          {props.highlights.map((highlight, index) => (
            <li className="experience-highlight">{highlight}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Experience;
