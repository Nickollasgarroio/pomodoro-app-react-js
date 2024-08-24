import React, { useState, useEffect } from "react";

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
  const [timeLeft, setTimeLeft] = useState<number>(focusTime * 60 * 1000);

  useEffect(() => {
    // Atualiza o tempo restante quando o modo ou os tempos mudam
    setTimeLeft(
      mode === "Break" ? breakTime * 60 * 1000 : focusTime * 60 * 1000
    );
  }, [mode, focusTime, breakTime]);

  useEffect(() => {
    // Limpa o intervalo anterior se existir
    let intervalId: NodeJS.Timeout | null = null;

    // Se o temporizador estiver rodando, configura o intervalo
    if (timerIsRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(intervalId!);
            setTimerMode(mode === "Break" ? "Focus" : "Break");
            setTimerIsRunning(false);

            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    }

    // Limpa o intervalo quando o temporizador para ou o componente é desmontado
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timerIsRunning, mode, setTimerMode, setTimerIsRunning]);

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
