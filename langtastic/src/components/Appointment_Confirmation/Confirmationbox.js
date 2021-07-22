import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
function ConfirmationBox(props) {
  const [confirmed, setConfirmed] = useState(false);

  let box;
  if (confirmed === true) {
    box = (
      <div>
        <p>Session booked</p>
        <div>Icon</div>
      </div>
    );
  } else {
    box = (
      <div className="confirmation-box">
        <p>Are you sure you want to book the session?</p>
        <div className="confirmation-button-container">
          <Link to="/tutorselection">
            <button className="no-button">No</button>
          </Link>
          <button className="yes-button" onClick={() => setConfirmed(true)}>
            Yes
          </button>
        </div>
      </div>
    );
  }
  return <div>{box}</div>;
}
export default ConfirmationBox;
