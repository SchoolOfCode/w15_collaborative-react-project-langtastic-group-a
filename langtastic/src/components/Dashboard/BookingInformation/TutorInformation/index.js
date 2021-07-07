import TutorLanguages from "./TutorLanguages";
import TutorName from "./TutorName";
import TutorPicture from "./TutorPicture";
import "./index.css";

function TutorInformation({ tutorInfo }) {
  console.log(tutorInfo);
  return (
    <section className="tutor-information">
      <TutorLanguages languagesArray={tutorInfo.languages}></TutorLanguages>
      <TutorName name={tutorInfo.name}></TutorName>
      <TutorPicture src={tutorInfo.picture} alt="Tutor Image"></TutorPicture>
    </section>
  );
}
export default TutorInformation;
