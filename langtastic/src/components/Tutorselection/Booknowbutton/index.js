import "./../index.css";
function Bookingbutton({ color, width }) {
  return (
    <button
      class="btn book-now"
      style={{ backgroundColor: color, width: width }}
    >
      Book now
    </button>
  );
}
export default Bookingbutton;
