import "./index.css";
import { Link } from "react-router-dom";
function Bookingbutton({ color, width }) {
  return (
    <button
      class="btn book-now"
      style={{ backgroundColor: color, width: width }}
    >
      <Link to="/appointment_confirmation">Book now</Link>
    </button>
  );
}
export default Bookingbutton;
