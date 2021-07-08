import React, { useState } from "react";
import Tutor from "../Tutor";
import tutorData from "../../libs/data";
function TutorSelection({ id }) {
  const [tutors, setTutors] = useState(tutorData);
  return <Tutor />;
}
export default TutorSelection;
