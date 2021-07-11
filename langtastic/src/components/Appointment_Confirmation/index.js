import { useLocation } from "react-router";
import TutorName from "../Dashboard/BookingInformation/TutorInformation/TutorName";
import TutorPicture from "../Dashboard/BookingInformation/TutorInformation/TutorPicture";
import { Rating } from "../../utils/utils";
import ConfirmationBox from "./Confirmationbox";

function AppointmentConfirmation() {
  const location = useLocation();
  const cat = location.state.dog;
  console.log(location);
  return (
    <div>
      {Rating(cat.rating)}
      <TutorPicture src={cat.picture} alt="Tutor Image" />
      <TutorName name={`${cat.first_name} ${cat.last_name}`} />
      <ConfirmationBox></ConfirmationBox>
    </div>
  );
}

export default AppointmentConfirmation;
