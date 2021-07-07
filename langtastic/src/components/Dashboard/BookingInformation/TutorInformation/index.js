import TutorLanguages from "./TutorLanguages";
import TutorName from "./TutorName";
import TutorPicture from "./TutorPicture";
import "./index.css";

function TutorInformation({ tutorInfo }) {
  console.log(tutorInfo);
  return (
    <section className="tutor-information">
      <TutorPicture src={tutorInfo.picture} alt="Tutor Image"></TutorPicture>
      <div>
        <TutorName name={tutorInfo.name}></TutorName>
        <TutorLanguages languagesArray={tutorInfo.languages}></TutorLanguages>
      </div>
    </section>
  );
}
export default TutorInformation;
