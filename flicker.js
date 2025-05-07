const header = document.getElementById("header");

// Morse code for "observervoid"
const morseCode = {
  "o": "---",
  "b": "-...",
  "s": "...",
  "e": ".",
  "r": ".-.",
  "v": "...-",
  "i": "..",
  "d": "-.."
};

const word = "observervoid";
let sequence = "";

// Convert word to Morse sequence
for (let letter of word) {
  if (morseCode[letter]) {
    sequence += morseCode[letter] + " "; // space between letters
  }
}

let index = 0;

function flicker() {
  const char = sequence[index];

  if (char === ".") {
    header.style.color = "black";
    setTimeout(() => header.style.color = "#FFA500", 300); // dot = short flicker
    setTimeout(flicker, 600); // pause before next
  } else if (char === "-") {
    header.style.color = "black";
    setTimeout(() => header.style.color = "#FF4500", 700); // dash = long flicker
    setTimeout(flicker, 1000);
  } else if (char === " ") {
    header.style.color = "#FF8C00"; // between letters
    setTimeout(flicker, 800);
  } else {
    setTimeout(flicker, 500);
  }

  index = (index + 1) % sequence.length;
}

flicker();
