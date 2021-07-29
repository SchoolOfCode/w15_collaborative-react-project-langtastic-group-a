import React, { useState } from "react";
import Tutor from "./Tutor";
import "./index.css";

import tutorData from "../../libs/data";
function TutorSelection() {
  useState(tutorData);
  //   console.log(tutorData[0]);
  return;
  tutorData.map((tutor) => {
    return <Tutor tutor={tutor} key={tutor.id} data-testid="tutor-data" />;
  });
}
export default TutorSelection;
