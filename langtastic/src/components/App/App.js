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
      <section class="tutor-selection">
        <TutorSelection />
      </section>
    </div>
  );
}

export default App;
