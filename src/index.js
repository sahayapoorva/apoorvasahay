import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SkillList from "./components/skillList/skillList";
import ProjectList from "./components/projectList/projectList";
import Education from "./components/education/education";
import ExperienceList from "./components/experienceList/experienceList";
import Avatar from "./components/avatar/avatar";
import Banner from "./components/banner/banner";
import Profile from './data';

function App() {
  return (
    <div className="App">
      <Avatar {...Profile.avatar} />
      <div className="content-container">
        <Banner {...Profile.header} />
        <div className="container1">
          <Education grow={2} schools={Profile.schools} />
          <SkillList skills={Profile.skills} />
        </div>
        <ExperienceList experiences={Profile.experiences} />
        <ProjectList projects={Profile.projects} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
