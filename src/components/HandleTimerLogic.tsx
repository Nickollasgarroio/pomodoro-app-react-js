import React, { useState, useEffect, useContext } from "react";
import { TimerContext } from "../App";

interface TimerProps {
  mode: "Break" | "Focus";
  timerIsRunning: boolean;
  focusTime: number; // tempo de foco em minutos
  breakTime: number; // tempo de intervalo em minutos
  setTimerMode: (mode: "Break" | "Focus") => void;
  setTimerIsRunning: (isRunning: boolean) => void;
}

export const HandleTimerLogic: React.FC<TimerProps> = ({
  mode,
  timerIsRunning,
  focusTime,
  breakTime,
  setTimerMode,
  setTimerIsRunning,
}) => {
  const timerContext = useContext(TimerContext);

  const [timeLeft, setTimeLeft] = useState<number>(
    mode === "Break" ? breakTime * 60 * 1000 : focusTime * 60 * 1000
  );

  useEffect(() => {
    setTimeLeft(
      mode === "Break" ? breakTime * 60 * 1000 : focusTime * 60 * 1000
    );
  }, [mode, focusTime, breakTime]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (timerIsRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(intervalId!);
            setTimerMode(mode === "Break" ? "Focus" : "Break");
            setTimerIsRunning(false);
            if (timerContext) {
              timerContext.handleSounds("end");
            }

            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timerIsRunning, mode, setTimerMode, setTimerIsRunning, timerContext]);

  if (!timerContext) return null;

  // Formatação do tempo restante em MM:SS
  const minutes = Math.floor(timeLeft / 1000 / 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div>
      <p>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};
