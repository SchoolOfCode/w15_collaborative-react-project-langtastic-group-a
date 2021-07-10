import TutorName from "../Dashboard/BookingInformation/TutorInformation/TutorName";

function AppointmentConfirmation({ tutorInfo }) {
  console.log(tutorInfo[0].first_name);
  return <TutorName name={`${tutorInfo[0].first_name}`} />;
  // <div className="miao"></div>;
}

export default AppointmentConfirmation;
