import sound_click from "../assets/sounds/click.wav";
import sound_end from "../assets/sounds/end.wav";
import sound_tomato from "../assets/sounds/wet_tomato.wav";

export const handleSounds = (action: string) => {
  const clickSound = new Audio(sound_click);
  const endSound = new Audio(sound_end);
  const tomatoSound = new Audio(sound_tomato);

  switch (action) {
    case "click":
      clickSound.volume = 0.2;
      clickSound.play();
      break;
    case "end":
      endSound.volume = 0.2;
      endSound.play();
      break;
    case "tomato":
      tomatoSound.volume = 0.2;
      tomatoSound.play();
      break;

    default:
      break;
  }
};
