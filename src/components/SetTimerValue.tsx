import React from "react";
import "../styles/SetTimerValue.css";

interface Props {
  setFocusTime: (time: number) => void;
  setBreakTime: (time: number) => void;
  focusTime: number;
  breakTime: number;
}

export const SetTimerValue: React.FC<Props> = ({
  setFocusTime,
  setBreakTime,
  focusTime,
  breakTime,
}) => {
  const handleFocusValueIncrease = () => {
    const newFocusTime = focusTime + 1;
    setFocusTime(newFocusTime);
  };

  const handleFocusValueDecrease = () => {
    const newFocusTime = Math.max(focusTime - 1, 0);
    setFocusTime(newFocusTime);
  };

  const handleBreakValueIncrease = () => {
    const newBreakTime = breakTime + 1;
    setBreakTime(newBreakTime);
  };

  const handleBreakValueDecrease = () => {
    const newBreakTime = Math.max(breakTime - 1, 0);
    setBreakTime(newBreakTime);
  };
  return (
    <div className="set_timer">
      <div className="set_timer_btn">
        <h2>Focus Time</h2>
        <div className="set_timer_btn_container">
          <button onClick={handleFocusValueIncrease}>
            <p>+</p>
          </button>
          {focusTime}
          <button onClick={handleFocusValueDecrease}>
            <p>-</p>
          </button>
        </div>
      </div>
      <div className="set_timer_btn">
        <h2>Break Time</h2>
        <div className="set_timer_btn_container">
          <button onClick={handleBreakValueIncrease}>
            <p>+</p>
          </button>
          {breakTime}
          <button onClick={handleBreakValueDecrease}>
            <p>-</p>
          </button>
        </div>
      </div>
    </div>
  );
};
