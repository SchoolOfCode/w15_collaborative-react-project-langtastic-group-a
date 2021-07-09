import React from "react";
import TutorCard from "./../Tutorcard";
import Bookingbutton from "../Booknowbutton";
function Tutor({ tutorData }) {
  // console.log("miao");
  // console.log(id);
  return (
    <>
      <TutorCard
        className="tutor-information"
        tutorInfo={tutorData}
      ></TutorCard>
    </>
  );
}

export default Tutor;
