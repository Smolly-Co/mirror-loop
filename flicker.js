const header = document.getElementById('header');
const argInput = document.getElementById('argInput');

// Morse code pattern for 'observer.void' (dot = 100ms, dash = 300ms)
const flickerPattern = [
  300, 100, // O
  300, 100, 100, 100, // B
  100, 100, 100, // S
  100, // E
  100, 300, 100, 100, // R
  100, 100, 100, 300, // V
  100, // E
  100, 300, 100, 100, // R

  500, // pause

  100, 100, 100, 300, // V
  300, 100, // O
  100, 100, // I
  300, 100, 100, 100 // D
];

// Flicker colors: neon → dark orange → black
const colors = ["#ffa500", "#cc5500"];

function flickerText(pattern, repeat = false) {
  let i = 0;

  function flicker() {
    if (i >= pattern.length) {
      if (repeat) {
        i = 0;
        setTimeout(flicker, 1000);
      }
      return;
    }

    header.style.color = colors[i % colors.length];
    setTimeout(() => {
      header.style.color = "#000000";
      setTimeout(() => {
        i++;
        flicker();
      }, 100);
    }, pattern[i]);
  }

  flicker();
}

flickerText(flickerPattern, true);

// Input check (case-insensitive and accepting all variations of "observer.void")
argInput.addEventListener('keydown', function (event) {
  // Trigger only when "Enter" is pressed
  if (event.key === 'Enter') {
    const inputValue = argInput.value.trim().toLowerCase();
    
    // Accepted input variations
    const validInputs = [
      "observervoid",
      "observer.void",
      "observer-void",
      "observer void"
    ];

    if (validInputs.includes(inputValue)) {
      // Redirect to the "document.html" page
      window.location.href = "document.html";
    }
  }
});
