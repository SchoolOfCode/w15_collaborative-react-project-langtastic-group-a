import { Link } from 'react-router-dom';
import { useState } from 'react';
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
      <div>
        <p>Are you sure you want to book the session?</p>
        <Link to="/tutorselection">
          <button>No</button>
        </Link>
        <button onClick={() => setConfirmed(true)}>Yes</button>
      </div>
    );
  }
  return <div data-testid="confirmationbox-container">{box}</div>;
}
export default ConfirmationBox;
