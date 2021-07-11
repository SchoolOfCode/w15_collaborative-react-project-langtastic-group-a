import { useLocation } from "react-router";
import TutorName from "../Dashboard/BookingInformation/TutorInformation/TutorName";
import TutorPicture from "../Dashboard/BookingInformation/TutorInformation/TutorPicture";
import { Rating } from "../../utils/utils";

function AppointmentConfirmation() {
  const location = useLocation();
  const cat = location.state.dog;
  console.log(location);
  return (
    <div>
      {Rating(cat.rating)}
      <TutorPicture src={cat.picture} alt="Tutor Image" />
      <TutorName name={`${cat.first_name} ${cat.last_name}`} />
    </div>
  );
}

export default AppointmentConfirmation;
