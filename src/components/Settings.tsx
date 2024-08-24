import React, { useContext } from "react";
import { SetTimerValue } from "./SetTimerValue";
import { TimerContext } from "../App"; // Adjust the import path as needed
import "../styles/Settings.css";

export const Settings: React.FC = () => {
  const timerContext = useContext(TimerContext);

  if (!timerContext) return null; // Handle the case where the context might be null

  const {
    focusTime,
    setFocusTime,
    breakTime,
    setBreakTime,
    handleTimeChange,
    handleSounds,
  } = timerContext;

  return (
    <div className="Settings_container">
      <div className="Settings_content">
        <SetTimerValue
          setFocusTime={(time: number) => {
            setFocusTime(time);
            handleTimeChange();
            handleSounds("click"); // Example of using handleSounds
          }}
          setBreakTime={(time: number) => {
            setBreakTime(time);
            handleTimeChange();
            handleSounds("click"); // Example of using handleSounds
          }}
          focusTime={focusTime}
          breakTime={breakTime}
        />
      </div>
    </div>
  );
};
