import TutorLanguages from "./../../Dashboard/BookingInformation/TutorInformation/TutorLanguages";
import TutorName from "./../../Dashboard/BookingInformation/TutorInformation/TutorName";
import TutorPicture from "./../../Dashboard/BookingInformation/TutorInformation/TutorPicture";
import Bookingbutton from "./../Booknowbutton";
function TutorCard({ tutorInfo }) {
  console.log(tutorInfo);
  return (
    <section className="tutor-information">
      <TutorPicture src={tutorInfo.picture} alt="Tutor Image"></TutorPicture>
      <div className="inner-div">
        <p>XXXXX</p>
        <TutorName
          name={`${tutorInfo.first_name} ${tutorInfo.last_name}`}
        ></TutorName>
        <TutorLanguages
          languagesArray={[
            tutorInfo.native_language,

            tutorInfo.tought_language,
          ]}
        ></TutorLanguages>
        <Bookingbutton width="100px" color="white" />
      </div>
    </section>
  );
}
export default TutorCard;
