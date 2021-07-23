import logo from "./logo.svg";
import "./logo.css";

function Logo() {
  return (
    <img
      data-testid="logo"
      className="logo-image"
      src={`${logo}`}
      alt="Logo"
    ></img>
  );
}

export default Logo;
