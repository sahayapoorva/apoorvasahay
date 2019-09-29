import React from "react";
import Project from "../project/project";
import Card from "../card/Card"
import "./projectList.css";

const ProjectList = props => {
  return (
        <Card cardName="Projects">
            {props.projects.map((project, index) => (
              <div>
                  <Project key={index} {...project} />
                  {index + 1 !== props.projects.length?<div className="seperator"/>:null}
              </div>
            ))}
        </Card>
  );
};

export default ProjectList;
