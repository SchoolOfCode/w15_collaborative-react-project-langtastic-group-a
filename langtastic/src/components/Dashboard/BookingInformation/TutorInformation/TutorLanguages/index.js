import "./index.css";
function TutorLanguages({ languagesArray }) {
  return (
    <div className="flex language-div">
      {languagesArray.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}
export default TutorLanguages;
