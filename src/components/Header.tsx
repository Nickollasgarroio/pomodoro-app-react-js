import { useContext } from "react";
import logo_pomopal from "../assets/logos/pomopal-logo.png";
import "../styles/Header.css";
import { TimerContext } from "../App";

export const Header = () => {
  const timerContext = useContext(TimerContext);

  if (!timerContext) return null; // Handle the case where the context might be null

  const { handleSounds } = timerContext;
  return (
    <div className="Header">
      <div className="logo_container">
        <h1 className="logotipo">PomoPal</h1>
        <img
          src={logo_pomopal}
          alt="pomopal logo"
          className="logo"
          onClick={() => handleSounds("tomato")}
        />
      </div>
    </div>
  );
};
