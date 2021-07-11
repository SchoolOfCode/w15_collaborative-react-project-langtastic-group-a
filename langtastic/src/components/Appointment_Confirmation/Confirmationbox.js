import Bookingbutton from "../Tutorselection/Booknowbutton";

export default function ConfirmationBox() {
  return (
    <div>
      <p>Are you sure you want to book the session?</p>
      <Bookingbutton>No</Bookingbutton>
      <Bookingbutton>Yes</Bookingbutton>
    </div>
  );
}
