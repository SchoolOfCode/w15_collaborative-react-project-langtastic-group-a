import React from 'react';
import TutorCard from './../Tutorcard';

function Tutor({ tutor }) {
  // console.log("miao");
  // console.log(id);
  return (
    <>
      <TutorCard
        data-testid="tutor"
        className="tutor-information"
        tutorInfo={tutor}
      ></TutorCard>
    </>
  );
}

export default Tutor;
