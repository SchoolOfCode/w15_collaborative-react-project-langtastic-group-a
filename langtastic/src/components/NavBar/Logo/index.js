import logo from "./logo.svg";
import "./logo.css";

function Logo() {
  return <img className="logo-image" src={`${logo}`} alt="Logo"></img>;
}

export default Logo;
