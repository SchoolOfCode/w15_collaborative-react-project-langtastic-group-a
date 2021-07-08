import React from "react";
import TutorInformation from "../../Dashboard/BookingInformation/TutorInformation";
function Tutor({ tutorData }) {
  // console.log("miao");
  // console.log(id);
  return <TutorInformation tutorInfo={tutorData} />;
}

export default Tutor;
