import React from "react";
import "./project.css";

const Project = props => {
  return (
    <div className="project-container">
      <header className="header-container">
        <p className="header-name">{props.name}</p>
        <p className="header-date">
          {props.startDate}-{props.endDate}
        </p>
      </header>
      <main className="main-container">
        <p>{props.description}</p>
      </main>
      <footer className="footer-container">
        {props.keyWords.map((keyword, index) => (
          <p key={index} className="keyword">
            {keyword}
          </p>
        ))}
      </footer>
    </div>
  );
};

export default Project;
