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
      time: "09:07",
      date: "2021/07/11",
    },
  },
  {
    id: 2,
    tutor: tutor2,
    timeAndDate: {
      time: "15:45",
      date: "2020/12/25",
    },
  },
];
export default bookings;
