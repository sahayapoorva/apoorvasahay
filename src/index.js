import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SkillList from "./components/skillList/skillList";
import ProjectList from "./components/projectList/projectList";
import Education from "./components/education/education";
import ExperienceList from "./components/experienceList/experienceList";
import Avatar from "./components/avatar/avatar";

const skills = [
  {
    name: "Java",
    percentage: "70%"
  },
  {
    name: "Python",
    percentage: "80%"
  },
  {
    name: "Javascript",
    percentage: "65%"
  }
];

const projects = [
  {
    name: "Text Classification",
    startDate: "March 2019",
    endDate: "June 2019",
    description: "Hello I am a text Classification Project.",
    keyWords: ["Python", "Machine Learning"]
  },
  {
    name: "Text Classification",
    startDate: "March 2019",
    endDate: "June 2019",
    description: "Hello I am a text Classification Project",
    keyWords: ["Python", "Machine Learning"]
  }
];

const schools = [
  {
    degree: "MS in Computer Science",
    startDate: "August 2015",
    endDate: "May 2017",
    schoolName: "The University of Texas at Dallas",
    gpa: "3.46/4.00"
  },
  {
    degree: "MS in Computer Science",
    startDate: "August 2015",
    endDate: "May 2017",
    schoolName: "UTD",
    gpa: "3.46/4.00"
  }
];

const experiences = [
  {
    name: "CyberSource Corporation",
    location: "Reseach Blvd, Austin, TX",
    startDate: "May, 2019",
    endDate: "Present",
    designation: "Sr Software Engineer",
    highlights: [
      "Added and maintained new Reporting endpoints.",
      "Enabled reporting apps monitoring.",
      "Created and used existing react components to different modules in Enterprise Business Unit portal.",
      "Introduced new resources in spring to be consumed by front end."
    ]
  },
  {
    name: "CyberSource Corporation",
    location: "Reserach Blvd, Austin, TX",
    startDate: "May, 2019",
    endDate: "Present",
    designation: "Sr Software Engineer",
    highlights: [
      "Added and maintained new Reporting endpoints.",
      "Enabled reporting apps monitoring.",
      "Created and used existing react components to different modules in Enterprise Business Unit portal.",
      "Introduced new resources in spring to be consumed by front end."
    ]
  }
];

const avatar = {
  name: "Apoorva Sahay",
  img: {
    src: "./images/profile.jpg",
    altText: "Apoorva Sahay"
  },
  address: {
    address1: "12440 Alameda Trace Circle",
    address2: "Apt #1824",
    city: "Austin",
    state: "Texas",
    zip: "78727"
  },
  socials: [
    {
      href: "https://www.linkedin.com/in/apoorva-sahay-04a25519/",
      img: {
        src: "https://img.icons8.com/ios/50/000000/linkedin.png",
        altText: "facebook"
      }
    },
    {
      href: "https://github.com/sahayapoorva",
      img: {
        src: "https://img.icons8.com/ios/50/000000/github.png",
        altText: "github"
      }
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Avatar {...avatar} />
      <SkillList skills={skills} />
      <ExperienceList experiences={experiences} />
      <Education schools={schools} />
      <ProjectList projects={projects} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
