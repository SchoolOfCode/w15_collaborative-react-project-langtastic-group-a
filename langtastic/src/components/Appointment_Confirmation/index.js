import TutorName from "../Dashboard/BookingInformation/TutorInformation/TutorName";

function AppointmentConfirmation({ tutorInfo }) {
  return (
    <div>
      <TutorName name={`${tutorInfo[0].first_name}`} />
    </div>
  );
  // <div className="miao"></div>;
}

export default AppointmentConfirmation;
