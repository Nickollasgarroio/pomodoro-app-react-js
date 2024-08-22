// src/components/Controls.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../styles/Control.css"; // Adicione o arquivo CSS para o Controls

interface ControlsProps {
  timerIsRunning: boolean;
  toggleTimerIsRunning: () => void;
  toggleSettings: (event: React.MouseEvent) => void;
}

export const Controls: React.FC<ControlsProps> = ({
  timerIsRunning,
  toggleTimerIsRunning,
  toggleSettings,
}) => {
  return (
    <div className="Controls">
      <button className="btn-primary" onClick={toggleTimerIsRunning}>
        <p>{timerIsRunning ? "pause" : "start"}</p>
      </button>
      <button className="btn-secondary" onClick={toggleSettings}>
        <FontAwesomeIcon icon={faGear} className="icon" />
        <p>settings</p>
      </button>
    </div>
  );
};
