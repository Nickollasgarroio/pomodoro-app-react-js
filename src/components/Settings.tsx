import React from "react";
import { SetTimerValue } from "./SetTimerValue";
import "../styles/Settings.css";

interface SettingsProps {
  focusTime: number;
  setFocusTime: (time: number) => void;
  breakTime: number;
  setBreakTime: (time: number) => void;
  handleTimeChange: () => void;
}

export const Settings: React.FC<SettingsProps> = ({
  focusTime,
  setFocusTime,
  breakTime,
  setBreakTime,
  handleTimeChange,
}) => {
  return (
    <div className="Settings_container">
      <div className="Settings_content">
        <SetTimerValue
          setFocusTime={(time: number) => {
            setFocusTime(time);
            handleTimeChange();
          }}
          setBreakTime={(time: number) => {
            setBreakTime(time);
            handleTimeChange();
          }}
          focusTime={focusTime}
          breakTime={breakTime}
        />
      </div>
    </div>
  );
};
