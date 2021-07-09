import "./App.css";
import NavBar from "../NavBar";
import Dashboard from "../Dashboard";
import TutorSelection from "../Tutorselection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import tutorData from "../../libs/data";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact />
          <Route path="/dashboard" component={Dashboard} />

          <section class="tutor-selection">
            <Route path="/tutorselection" component={TutorSelection} />
          </section>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
