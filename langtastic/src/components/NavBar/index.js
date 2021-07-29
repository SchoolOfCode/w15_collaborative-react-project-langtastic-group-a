import Logo from "./Logo";
// import HandburgerMenu from "./HamburgerMenu";
import Title from "./Title";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <section id="navbar" data-testid="navbar">
        <div id="navbar-logo" className="flex">
          <Link to="/">
            <Logo></Logo>{" "}
          </Link>
          <Link to="/">
            <Title title="Langtastic" data-testid="title"></Title>
          </Link>
        </div>
        <div>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <Link to="/tutorselection">
            <p data-testid="tutor-selection" className="tutorselection">
              TutorSelection
            </p>
          </Link>

          <Link
            to={{
              pathname: "/appointment_confirmation",
            }}
            data-testid="confirmation"
          >
            Appointment Confirmation
          </Link>
        </div>

        <div className="hamburger-container">
          <div className="handburgerbutton"></div>
          <div className="handburgerbutton"></div>
          <div className="handburgerbutton"></div>
        </div>
      </section>
    </>
  );
}
export default NavBar;
