import React from "react";
import Experience from "../experience/experience";
import Card from '../card/Card'

const ExperienceList = props => {
  return (
    <Card cardName="Experience">
        {props.experiences.map((experience, index) => (
          <div>
            <Experience {...experience} />
            {index + 1 !== props.experiences.length?<div className="seperator"/>:null}
          </div>
        ))}
    </Card>
  );
};

export default ExperienceList;
