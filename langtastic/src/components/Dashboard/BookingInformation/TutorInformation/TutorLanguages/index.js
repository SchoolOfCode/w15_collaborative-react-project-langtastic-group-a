function TutorLanguages({ languagesArray }) {
  return (
    <>
      {languagesArray.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
}
export default TutorLanguages;
