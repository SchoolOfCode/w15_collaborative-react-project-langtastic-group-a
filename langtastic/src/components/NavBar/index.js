import Logo from "./Logo";
// import HandburgerMenu from "./HamburgerMenu";
import Title from "./Title";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <section id="navbar">
        <div id="navbar-logo" className="flex">
          <Link to="/">
            <Logo></Logo>{" "}
          </Link>
          <Link to="/">
            <Title title="Langtastic"></Title>
          </Link>
        </div>
        <div>
          <div className="handburgerbutton"></div>
          <div className="handburgerbutton"></div>
          <div className="handburgerbutton"></div>
        </div>
        <div>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <Link to="/tutorselection">
            <p>TutorSelection</p>
          </Link>
          <Link to="/appointment_confirmation">
            <p>Appointment Confirmation</p>
          </Link>
        </div>
      </section>
    </>
  );
}
export default NavBar;
