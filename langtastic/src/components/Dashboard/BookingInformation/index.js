import TutorInformation from "./TutorInformation";
import DateAndTime from "./DateAndTime";
import "./index.css";

function BookingInformation({ booking }) {
  return (
    <div className="booking-information">
      <DateAndTime
        date={booking.timeAndDate.date}
        time={booking.timeAndDate.time}
      ></DateAndTime>
      <TutorInformation
        className="inner-div"
        tutorInfo={booking.tutor}
      ></TutorInformation>
    </div>
  );
}
export default BookingInformation;
