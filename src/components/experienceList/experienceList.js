import React from "react";
import Experience from "../experience/experience";

const ExperienceList = props => {
  return (
    <div>
      <header className="list-header">
        <p>Experience :</p>
      </header>
      <main>
        {props.experiences.map(experience => (
          <Experience {...experience} />
        ))}
      </main>
    </div>
  );
};

export default ExperienceList;
