import logo_pomopal from "../assets/logos/pomopal-logo.png";
import "../styles/Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <div className="logo_container">
        <h1 className="logotipo">PomoPal</h1>
        <img src={logo_pomopal} alt="pomopal logo" className="logo" />
      </div>
    </div>
  );
};
