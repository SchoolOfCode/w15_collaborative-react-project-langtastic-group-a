import "./App.css";
import NavBar from "../NavBar";
import Dashboard from "../Dashboard";
import TutorSelection from "../Tutorselection";
import Tutorsheader from "../Tutorselection/Tutorsheader";
// import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import HomePage from "../HomePage/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppointmentConfirmation from "../Appointment_Confirmation";

import tutorData from "../../libs/data";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/tutorselection" component={TutorSelection} />

          <Route
            path="/appointment_confirmation"
            component={AppointmentConfirmation}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
