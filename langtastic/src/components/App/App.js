import "./App.css";
import NavBar from "../NavBar";
import Dashboard from "../Dashboard";
import TutorSelection from "../Tutorselection";
import tutorData from "../../libs/data";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Dashboard></Dashboard>
      <TutorSelection id={tutorData.id} />
    </div>
  );
}

export default App;
