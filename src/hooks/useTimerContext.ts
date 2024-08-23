// useFocusTime.ts
import { useContext } from "react";
import { TimerContext } from "../components/TimerContext";

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error(
      "useFocusTime deve ser usado dentro de um FocusTimeProvider"
    );
  }
  return context;
};
