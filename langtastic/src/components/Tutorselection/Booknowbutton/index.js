import "./index.css";
import { Link } from "react-router-dom";
function Bookingbutton({ color, width, tutorInfo }) {
  return (
    <button
      className="btn book-now"
      style={{ backgroundColor: color, width: width }}
    >
      <Link
        className="book-now"
        to={{
          pathname: "/appointment_confirmation",
          state: {
            dog: tutorInfo,
          },
        }}
      >
        Book now
      </Link>
    </button>
  );
}
export default Bookingbutton;
