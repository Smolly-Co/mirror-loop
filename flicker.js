document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("argInput");
  const header = document.getElementById("header");

  const morseCode = {
    "a": ".-",     "b": "-...",   "c": "-.-.",   "d": "-..",
    "e": ".",      "f": "..-.",   "g": "--.",    "h": "....",
    "i": "..",     "j": ".---",   "k": "-.-",    "l": ".-..",
    "m": "--",     "n": "-.",     "o": "---",    "p": ".--.",
    "q": "--.-",   "r": ".-.",    "s": "...",    "t": "-",
    "u": "..-",    "v": "...-",   "w": ".--",    "x": "-..-",
    "y": "-.--",   "z": "--..",   " ": " "
  };

  function textToMorse(text) {
    return text
      .toLowerCase()
      .split("")
      .map(char => morseCode[char] || "")
      .join(" ");
  }

  const morsePattern = textToMorse("observer void");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let value = input.value.trim().toLowerCase();

      const validInputs = [
        "observervoid",
        "observer.void",
        "observer-void",
        "observer void"
      ];

      if (validInputs.includes(value)) {
        playMorseFlicker(morsePattern);
      }
    }
  });

  function playMorseFlicker(pattern) {
    let time = 0;
    const unit = 300; // 1 unit time in ms (dot = 1, dash = 3, pause = 1)

    for (let symbol of pattern) {
      if (symbol === ".") {
        setTimeout(() => header.style.color = "black", time);
        setTimeout(() => header.style.color = "#ff6600", time + unit);
        time += unit * 2;
      } else if (symbol === "-") {
        setTimeout(() => header.style.color = "black", time);
        setTimeout(() => header.style.color = "#cc4400", time + unit * 3);
        time += unit * 4;
      } else if (symbol === " ") {
        time += unit * 2; // space between letters
      }
    }

    // After animation, redirect
    setTimeout(() => {
      window.location.href = "document.html";
    }, time + 1000);
  }
});
