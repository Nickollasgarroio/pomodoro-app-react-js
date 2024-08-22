import { useState } from "react";
import { Timer } from "./components/Timer";
import { Controls } from "./components/Controls";
import { Settings } from "./components/Settings";
import "./styles/App.css";
import "./styles/styles.css";
import clickSoundFile from "./assets/sounds/click.wav";
import alarmSoundFile from "./assets/sounds/alarm_sound.wav";
import logo_pomopal from "./assets/logos/pomopal-logo.png";

function App() {
  const [timerMode, setTimerMode] = useState<"Break" | "Focus">("Focus");
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);
  const [focusTime, setFocusTime] = useState<number>(1); // Valor inicial em minutos
  const [breakTime, setBreakTime] = useState<number>(1); // Valor inicial em minutos
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

  const toggleTimerIsRunning = () => {
    setTimerIsRunning((prevState) => !prevState);
  };

  const playSound = (action: string) => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.volume = 0.5;
    const alarmSound = new Audio(alarmSoundFile);
    alarmSound.volume = 0.5;

    switch (action) {
      case "click":
        clickSound.play();
        break;
      case "alarm":
        alarmSound.play();
        break;
      default:
        break;
    }
  };

  const handleTimeChange = () => {
    setTimerIsRunning(false);
  };

  const handleShowSettings = () => {
    setSettingsVisible((prev) => !prev);
  };

  return (
    <div className="App" onClick={() => playSound("click")}>
      <div className="Header">
        <h1 className="app_name">PomoPal</h1>
        <img src={logo_pomopal} alt="pomopal logo" className="logo" />
      </div>
      <div className="Main_app">
        <Timer
          timerMode={timerMode}
          setTimerMode={setTimerMode}
          timerIsRunning={timerIsRunning}
          toggleTimerIsRunning={toggleTimerIsRunning}
          focusTime={focusTime}
          breakTime={breakTime}
        />
        <Controls
          timerIsRunning={timerIsRunning}
          toggleTimerIsRunning={toggleTimerIsRunning}
          toggleSettings={handleShowSettings}
        />
      </div>
      {settingsVisible && (
        <Settings
          showSettings={settingsVisible}
          focusTime={focusTime}
          setFocusTime={setFocusTime}
          breakTime={breakTime}
          setBreakTime={setBreakTime}
          handleTimeChange={handleTimeChange}
        />
      )}
    </div>
  );
}

export default App;
