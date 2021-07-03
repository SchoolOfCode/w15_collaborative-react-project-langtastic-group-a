import Logo from "./Logo";
// import HandburgerMenu from "./HamburgerMenu";
import Title from "./Title";
import "./navBar.css";

function NavBar() {
  return (
    <>
      <section id="navbar">
        <div id="navbar-logo" className="flex">
          <Logo></Logo>
          <Title title="Langtastic"></Title>
        </div>
        <div>
          <div className="handburgerbutton"></div>
          <div className="handburgerbutton"></div>
          <div className="handburgerbutton"></div>
        </div>
      </section>
    </>
  );
}
export default NavBar;
