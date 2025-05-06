const header = document.getElementById('header');

// Morse for "HI" (.... ..)
const flickerPattern = [
  100, 100, 100, 100, // H: dot-dot-dot-dot
  300,               // space between letters
  100, 100           // I: dot-dot
];

// Flicker colors
const colors = ["#ff69b4", "#00ffff"]; // pink and blue

function flickerText(pattern, repeat = false) {
  let i = 0;

  function flicker() {
    if (i >= pattern.length) {
      if (repeat) {
        i = 0;
        setTimeout(flicker, 500); // delay before repeating
      }
      return;
    }

    // Flicker ON
    header.style.color = colors[i % colors.length];
    setTimeout(() => {
      // Flicker OFF
      header.style.color = "#ffffff";
      setTimeout(() => {
        i++;
        flicker();
      }, 100); // OFF duration
    }, pattern[i]);
  }

  flicker();
}

flickerText(flickerPattern, true);
