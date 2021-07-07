import BookingInformation from "./BookingInformation";
import randomPhoto from "./tutorPics/randomPhoto.jpg";

const tutor1 = {
  name: "Toby",
  age: 23,
  languages: ["English"],
  picture: randomPhoto,
};
const tutor2 = {
  name: "Sarah",
  age: 25,
  languages: ["French", "English"],
  picture: " ",
};
console.log(tutor2);
const bookings = [
  {
    id: 1,
    tutor: tutor1,
    timeAndDate: {
      time: "12:30",
      date: "21/08/2021",
    },
  },
  //   {
  //     id: 2,
  //     tutor: tutor2,
  //     timeAndDate: {
  //       time: "15:45",
  //       date: "06/07/2021",
  //     },
  //   },
];
function Dashboard() {
  return bookings.map((booking) => {
    return <BookingInformation booking={booking} key={booking.id}></BookingInformation>;
  });
}
export default Dashboard;
