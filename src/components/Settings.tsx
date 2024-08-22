import React from "react";
import { CSSTransition } from "react-transition-group"; // Correção aqui
import { SetTimerValue } from "./SetTimerValue";
import "../styles/Settings.css"; // Importar o CSS correto

interface SettingsProps {
  focusTime: number;
  setFocusTime: (time: number) => void;
  breakTime: number;
  setBreakTime: (time: number) => void;
  handleTimeChange: () => void;
  showSettings: boolean;
}

export const Settings: React.FC<SettingsProps> = ({
  focusTime,
  setFocusTime,
  breakTime,
  setBreakTime,
  handleTimeChange,
  showSettings,
}) => {
  return (
    <CSSTransition
      in={showSettings}
      timeout={300}
      classNames={"fade"}
      unmountOnExit
    >
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
    </CSSTransition>
  );
};
