import { createContext, useState } from "react";
import { Timer } from "./components/Timer";
import { Controls } from "./components/Controls";
import { Settings } from "./components/Settings";
import { Header } from "./components/Header";
import "./styles/App.css";

import sound_click from "./assets/sounds/click.wav";
import sound_alarm from "./assets/sounds/alarm_sound.wav";

interface TimerContextProps {
  focusTime: number;
  setFocusTime: (time: number) => void;
  breakTime: number;
  setBreakTime: (time: number) => void;
  timerIsRunning: boolean;
  setTimerIsRunning: (isRunning: boolean) => void;
  timerMode: "Break" | "Focus";
  setTimerMode: (mode: "Break" | "Focus") => void;
  handleTimeChange: () => void;
  handleSounds: (action: string) => void;
}

export const TimerContext = createContext<TimerContextProps | null>(null);

function App() {
  const [focusTime, setFocusTime] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<"Break" | "Focus">("Focus");
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

  const handleTimeChange = () => {
    setTimerIsRunning(false);
  };

  const handleShowSettings = () => {
    setSettingsVisible(!settingsVisible);
  };

  const handleSounds = (action: string) => {
    const clickSound = new Audio(sound_click);
    const alarmSound = new Audio(sound_alarm);
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

  return (
    <TimerContext.Provider
      value={{
        focusTime,
        setFocusTime,
        breakTime,
        setBreakTime,
        timerIsRunning,
        setTimerIsRunning,
        timerMode,
        setTimerMode,
        handleTimeChange,
        handleSounds,
      }}
    >
      <div className="App">
        <Header />
        <Timer />
        <Controls toggleSettings={handleShowSettings} />
        {settingsVisible && <Settings />}
      </div>
    </TimerContext.Provider>
  );
}

export default App;
