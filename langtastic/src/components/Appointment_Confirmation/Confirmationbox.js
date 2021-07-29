import { Link } from "react-router-dom";
import { useReducer } from "react";

//initial state is false
//if action is "yes" change state to true and show the confirmed info
//if action is "no" keep initial state and return to tutor selection.
const initialState = { confirmed: false };

function reducer(state, action) {
  switch (action.type) {
    case "yes":
      return { confirmed: true };
    case "no":
      return { confirmed: false };
    default:
      throw new Error();
  }
}
function ConfirmationBox(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  let box;
  if (state.confirmed === true) {
    box = (
      <div>
        <p className="booked">Session booked</p>
        <div>Icon</div>
      </div>
    );
  } else {
    box = (
      <div>
        <p>Are you sure you want to book the session?</p>
        <Link to="/tutorselection">
          <button
          // onClick={() => {
          //   dispatch({ type: "no" });
          // }}
          >
            No
          </button>
        </Link>
        <button
          data-testid="button"
          className="yes"
          onClick={() => {
            dispatch({ type: "yes" });
          }}
        >
          Yes
        </button>
      </div>
    );
  }
  return <div data-testid="confirmation-box">{box}</div>;
}
export default ConfirmationBox;
