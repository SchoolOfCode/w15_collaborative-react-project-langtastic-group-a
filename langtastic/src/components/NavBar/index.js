import Logo from "./Logo";
import HandburgerMenu from "./HamburgerMenu";
import Title from "./Title";
import "./navBar.css";

function NavBar() {
  return (
    <>
      <Logo></Logo>
      <HandburgerMenu></HandburgerMenu>
      <Title title="Langtastic"></Title>
      <div className="handburgerbutton"></div>
      <div className="handburgerbutton"></div>
      <div className="handburgerbutton"></div>
    </>
  );
}
export default NavBar;
