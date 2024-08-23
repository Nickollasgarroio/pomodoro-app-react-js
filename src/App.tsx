import { createContext, useState } from "react";
import { Timer } from "./components/Timer";
import { Controls } from "./components/Controls";
import { Settings } from "./components/Settings";
import { Header } from "./components/Header";
import "./styles/App.css";

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
      }}
    >
      <div className="App">
        <Header />
        <Timer />
        <Controls toggleSettings={handleShowSettings} />
        {settingsVisible && (
          <Settings
            focusTime={focusTime}
            setFocusTime={setFocusTime}
            breakTime={breakTime}
            setBreakTime={setBreakTime}
            handleTimeChange={handleTimeChange}
          />
        )}
      </div>
    </TimerContext.Provider>
  );
}

export default App;
