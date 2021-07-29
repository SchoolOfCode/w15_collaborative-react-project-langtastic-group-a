import TutorLanguages from "./TutorLanguages";
import TutorName from "./TutorName";
import TutorPicture from "./TutorPicture";
import "./index.css";

function TutorInformation({ tutorInfo }) {
  console.log(tutorInfo);
  return (
    <section className="tutor-information" data-testid="tutor-info">
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
      </div>
    </section>
  );
}
export default TutorInformation;
