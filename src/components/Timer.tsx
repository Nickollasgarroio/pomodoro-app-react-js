import { HandleTimerLogic } from "./HandleTimerLogic";
import "../styles/styles.css";
import "../styles/Timer.css";

interface TimerProps {
  timerMode: "Break" | "Focus";
  setTimerMode: (mode: "Break" | "Focus") => void;
  timerIsRunning: boolean;
  toggleTimerIsRunning: () => void;
  focusTime: number;
  breakTime: number;
}

export const Timer: React.FC<TimerProps> = ({
  timerMode,
  setTimerMode,
  timerIsRunning,
  focusTime,
  breakTime,
}) => {
  return (
    <div>
      <div className="Timer_display">
        <div className="button_container text_stroke">
          <HandleTimerLogic
            mode={timerMode}
            timerIsRunning={timerIsRunning}
            focusTime={focusTime}
            breakTime={breakTime}
          />
          <h1>{timerMode.toLowerCase()}</h1>
        </div>
      </div>
      <p
        onClick={() => setTimerMode(timerMode === "Break" ? "Focus" : "Break")}
      >
        mudar modo
      </p>
    </div>
  );
};
