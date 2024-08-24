import { useContext } from "react";
import "../styles/styles.css";
import "../styles/Timer.css";
import { TimerContext } from "../App";
import { HandleTimerLogic } from "./HandleTimerLogic";

export const Timer = () => {
  const timerContext = useContext(TimerContext);

  if (!timerContext) return null;

  const {
    focusTime,
    breakTime,
    timerIsRunning,
    setTimerIsRunning,
    timerMode,
    setTimerMode,
    handleSounds,
  } = timerContext;

  // Função para alternar o estado de timerIsRunning
  const toggleTimerIsRunning = () => {
    setTimerIsRunning(!timerIsRunning);
  };

  return (
    <div className="Timer">
      <div className="Timer_display" onClick={toggleTimerIsRunning}>
        <div
          className="button_container stroke_texto_h2_primario"
          onClick={() => handleSounds("click")}
        >
          <p className="timer_visor">
            <HandleTimerLogic
              mode={timerMode}
              timerIsRunning={timerIsRunning}
              focusTime={focusTime}
              breakTime={breakTime}
            />
          </p>
          <h1 className="timer_mode stroke_texto_h2_secundario">
            {timerMode.toLowerCase()}
          </h1>
        </div>
      </div>
      <button
        className="btn-timer-change-mode"
        onClick={() => {
          setTimerMode(timerMode === "Break" ? "Focus" : "Break");
        }}
      >
        change mode
      </button>
    </div>
  );
};
