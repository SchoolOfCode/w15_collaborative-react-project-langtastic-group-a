import React, { useState } from "react";
import Tutor from "./Tutor";
import "./index.css";

import tutorData from "../../libs/data";
function TutorSelection() {
  const [tutors, setTutors] = useState(tutorData);
  //   console.log(tutorData[0]);

  return tutorData.map((tutor) => {
    return <Tutor tutorData={tutor} />;
  });
}
export default TutorSelection;
