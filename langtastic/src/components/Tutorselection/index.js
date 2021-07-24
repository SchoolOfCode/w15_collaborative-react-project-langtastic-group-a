import React, { useState } from "react";
import Tutor from "./Tutor";
import "./index.css";

import tutorData from "../../libs/data";
function TutorSelection() {
  useState(tutorData);
  //   console.log(tutorData[0]);
  return (
    <div
      className="tutor-selection-container
    "
    >
      {tutorData.map((tutor) => {
        return <Tutor tutor={tutor} />;
      })}
    </div>
  );
}
export default TutorSelection;
