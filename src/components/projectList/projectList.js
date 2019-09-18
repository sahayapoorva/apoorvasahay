import React from "react";
import Project from "../project/project";
import "./projectList.css";

const ProjectList = props => {
  return (
    <div>
      <header className="list-header">
        <p>List of Projects: </p>
      </header>
      <main>
        {props.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </main>
    </div>
  );
};

export default ProjectList;
