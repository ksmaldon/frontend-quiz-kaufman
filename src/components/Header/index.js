import "./index.css";
import logo from "../images/quiz_kaufman_logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-image" alt="logo" src={logo} />
      </div>
    </div>
  );
}
