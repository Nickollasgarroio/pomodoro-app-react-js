import sound_click from "../assets/sounds/click.wav";
import sound_alarm from "../assets/sounds/alarm_sound.wav";

export const HandleSounds = () => (action: string) => {
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
