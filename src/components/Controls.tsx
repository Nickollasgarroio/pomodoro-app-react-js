import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../styles/Controls.css"; // Add the CSS file for Controls
import { TimerContext } from "../App"; // Make sure to import TimerContext

interface ControlsProps {
  toggleSettings: (event: React.MouseEvent) => void;
}

export const Controls: React.FC<ControlsProps> = ({ toggleSettings }) => {
  const timerContext = useContext(TimerContext);

  if (!timerContext) return null; // Handle the case where the context might be null

  const { timerIsRunning, setTimerIsRunning, handleSounds } = timerContext;

  // Define the function inside the component
  const toggleTimerIsRunning = () => {
    setTimerIsRunning(!timerIsRunning);
  };

  return (
    <div className="Controls">
      <button
        className="controls-btn-primary"
        onClick={() => {
          toggleTimerIsRunning();
          handleSounds("click");
        }}
      >
        <p>{timerIsRunning ? "Pause" : "Start"}</p>
      </button>
      <button
        className="controls-btn-secondary"
        onClick={(e) => {
          toggleSettings(e);
          handleSounds("click");
        }}
      >
        <FontAwesomeIcon icon={faGear} className="icon" />
        <p>Settings</p>
      </button>
    </div>
  );
};
