import React, { useState } from "react";
import Tutor from "./Tutor";
import tutorData from "../../libs/data";
function TutorSelection() {
  const [tutors, setTutors] = useState(tutorData);
  //   console.log(tutorData[0]);
  return <Tutor id={tutorData[0].id} />;
}
export default TutorSelection;
