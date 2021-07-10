import tutorData from "../libs/data";
import AppointmentConfirmation from "./Appointment_Confirmation";
function Appointmentconfirmationwrapper() {
  return <AppointmentConfirmation tutorInfo={tutorData} />;
}
export default Appointmentconfirmationwrapper;
