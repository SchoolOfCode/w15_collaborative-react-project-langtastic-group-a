import "./App.css";
import NavBar from "../NavBar";
import Dashboard from "../Dashboard";
import TutorSelection from "../Tutorselection";
import Tutorsheader from "../Tutorselection/Tutorsheader";
// import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import HomePage from "../HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact />
          <Route path="/dashboard" component={Dashboard} />

          <section class="tutor-selection">
            <Tutorsheader></Tutorsheader>
            <Route path="/tutorselection" component={TutorSelection} />
          </section>
        </Switch>
      </div>
      <HomePage></HomePage>
      {/* <div>
        <CalendarComponent className="Calendar"></CalendarComponent>
      </div> */}
    </Router>
  );
}

export default App;
