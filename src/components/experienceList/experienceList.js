import React from "react";
import Experience from "../experience/experience";
import Card from '../card/Card'

const ExperienceList = props => {
  return (
    <Card cardName="Experience">
        {props.experiences.map(experience => (
          <Experience {...experience} />
        ))}
    </Card>
  );
};

export default ExperienceList;
