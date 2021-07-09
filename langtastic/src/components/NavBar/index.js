import Logo from "./Logo";
// import HandburgerMenu from "./HamburgerMenu";
import Title from "./Title";
import "./navBar.css";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";

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
        </div>
      </section>
    </>
  );
}
export default NavBar;
