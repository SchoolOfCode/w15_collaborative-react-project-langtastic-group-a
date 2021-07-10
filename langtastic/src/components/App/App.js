import "./App.css";
import NavBar from "../NavBar";
import Dashboard from "../Dashboard";
import TutorSelection from "../Tutorselection";
import Tutorsheader from "../Tutorselection/Tutorsheader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppointmentConfirmation from "../Appointment_Confirmation";

import tutorData from "../../libs/data";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <AppointmentConfirmation
          name="miao"
          tutorInfo={tutorData}
        ></AppointmentConfirmation>
        <Switch>
          <Route path="/" exact />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route
            path="/appointment_confirmation"
            component={Appointmentconfirmationwrapper}
          /> */}

          <section className="tutor-selection">
            <Tutorsheader></Tutorsheader>
            <Route path="/tutorselection" component={TutorSelection} />
          </section>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
