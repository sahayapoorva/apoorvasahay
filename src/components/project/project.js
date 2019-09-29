import React from "react";
import "./project.css";

const Project = props => {
  return (
    <div className="container-padding">
      <header className="header-container">
        <h2 className="header-name">{props.name}</h2>
        <h2 className="header-date">
          {props.startDate}-{props.endDate}
        </h2>
      </header>
      <main className="main-container">
        {props.description}
      </main>
      <footer className="footer-container">
        {props.keyWords.map((keyword, index) => (
          <div key={index} className="keyword">
            {keyword}
          </div>
        ))}
      </footer>
    </div>
  );
};

export default Project;
