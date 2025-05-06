const header = document.getElementById('header');

// Morse code flicker pattern for 'observer.void'
const flickerPattern = [
  300, 100, // O
  300, 100, 100, 100, // B
  100, 100, 100, // S
  100, // E
  100, 300, 100, 100, // R
  100, 100, 100, 300, // V
  100, // E
  100, 300, 100, 100, // R

  500, // pause between parts

  100, 100, 100, 300, // V
  300, 100, // O
  100, 100, // I
  300, 100, 100, 100 // D
];

// Glitch color rotation: neon orange → dark orange → black
const colors = ["#ffa500", "#cc5500"];

function flickerText(pattern, repeat = false) {
  let i = 0;

  function flicker() {
    if (i >= pattern.length) {
      if (repeat) {
        i = 0;
        setTimeout(flicker, 1000); // delay before repeating the word
      }
      return;
    }

    // Flicker ON
    header.style.color = colors[i % colors.length];
    setTimeout(() => {
      // Flicker OFF
      header.style.color = "#000000";
      setTimeout(() => {
        i++;
        flicker();
      }, 100); // OFF duration
    }, pattern[i]);
  }

  flicker();
}

flickerText(flickerPattern, true);
