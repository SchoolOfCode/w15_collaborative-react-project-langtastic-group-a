import TutorInformation from "./TutorInformation";
import DateAndTime from "./DateAndTime";
import "./index.css";

function BookingInformation({ booking }) {
  console.log(booking.tutor.languages);
  return (
    <section className="booking-information">
      <DateAndTime
        date={booking.timeAndDate.date}
        time={booking.timeAndDate.time}
      ></DateAndTime>
      <TutorInformation
        className="inner-div"
        tutorInfo={booking.tutor}
      ></TutorInformation>
    </section>
  );
}
export default BookingInformation;
