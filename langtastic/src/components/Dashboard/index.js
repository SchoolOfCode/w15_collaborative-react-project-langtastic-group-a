import BookingInformation from "./BookingInformation";
import bookings from "./tutorBookings";

function Dashboard() {
  return bookings.map((booking) => {
    return <BookingInformation booking={booking} key={booking.id}></BookingInformation>;
  });
}
export default Dashboard;
