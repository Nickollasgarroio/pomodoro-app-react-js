import { createContext, useState } from "react";

interface TimerContextProps {
  // your props here
  children: React.ReactNode;
  focusTime: number;
  setFocusTime: (time: number) => void;
  breakTime: number;
  setBreakTime: (time: number) => void;
  handleTimeChange: () => void;
  handleSounds: (action: string) => void;
  setSettingsVisible: (isVisible: boolean) => void;
}

const TimerContext = createContext<TimerContextProps | null>(null);

const TimerProvider: React.FC<TimerContextProps> = ({ children, ...props }) => {
  const [focusTime, setFocusTime] = useState<number>(0);
  const [breakTime, setBreakTime] = useState<number>(0);

  // your implementation here
  return (
    <TimerContext.Provider
      value={{
        ...props,
        focusTime,
        setFocusTime,
        breakTime,
        setBreakTime,
        children,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider, TimerContext };
