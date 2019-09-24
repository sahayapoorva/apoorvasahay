import React from "react";
import Project from "../project/project";
import Card from "../card/Card"
import "./projectList.css";

const ProjectList = props => {
  return (
        <Card cardName="Projects">
            {props.projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
        </Card>
  );
};

export default ProjectList;
