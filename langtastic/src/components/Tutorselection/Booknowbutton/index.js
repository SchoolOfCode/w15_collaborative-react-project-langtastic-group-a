import "./index.css";
import { Link } from "react-router-dom";
function Bookingbutton({ color, width, tutorInfo }) {
  return (
    <button
      class="btn book-now"
      style={{ backgroundColor: color, width: width }}
    >
      <Link
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
