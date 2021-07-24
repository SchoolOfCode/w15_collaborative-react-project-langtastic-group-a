import BookingInformation from "./BookingInformation";
import bookings from "./tutorBookings";

function Dashboard() {
  const upcomingBookings = bookings.filter((booking) => {
    const bookingDate = new Date(`${booking.timeAndDate.date} ${booking.timeAndDate.time}`);
    console.log(bookingDate);
    return bookingDate > Date.now();
  });
  const pastBookings = bookings.filter((booking) => {
    const bookingDate = new Date(`${booking.timeAndDate.date} ${booking.timeAndDate.time}`);
    console.log(bookingDate);
    return bookingDate < Date.now();
  });
  return (
    <div>
      <h2>Upcoming Bookings</h2>

      {upcomingBookings.map((booking) => {
        return <BookingInformation booking={booking} key={booking.id}></BookingInformation>;
      })}
      <h2>Past Bookings</h2>

      {pastBookings.map((booking) => {
        return <BookingInformation booking={booking} key={booking.id}></BookingInformation>;
      })}
    </div>
  );
}
export default Dashboard;
