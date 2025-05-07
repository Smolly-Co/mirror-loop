document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const input = document.getElementById('argInput');
  
  // Set up the flicker effect for the header
  let flickerTimeout;

  function startFlicker() {
    let morseCode = "--- ...- ... . .-. ...- . .-. / ...- --- .. -.."; // Morse code for 'observer void'
    let morseIndex = 0;
    
    function flickerLoop() {
      if (morseIndex < morseCode.length) {
        if (morseCode[morseIndex] === '.') {
          header.style.color = 'black'; // Black for dot
        } else if (morseCode[morseIndex] === '-') {
          header.style.color = 'black'; // Black for dash
        } else {
          header.style.color = 'orange'; // Reset to original color
        }
        morseIndex++;
      } else {
        morseIndex = 0; // Reset after a complete loop
      }
      flickerTimeout = setTimeout(flickerLoop, 200); // Adjust flicker speed
    }

    flickerLoop(); // Start flickering immediately when the page loads
  }

  function stopFlicker() {
    clearTimeout(flickerTimeout); // Stop flickering
    header.style.color = 'orange'; // Reset to the original color
  }

  startFlicker(); // Start flickering immediately when the page loads

  // Setup to handle user input
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      let userInput = input.value.trim().toLowerCase();

      if (userInput === 'observer void') {
        // If the correct command is entered, change the URL to the updated page
        window.location.href = 'https://smolly-co.github.io/mirror-loop/observer.void.ai.html'; // Update this URL
        stopFlicker(); // Stop flickering
      } else {
        // Invalid command
        console.log('Invalid Command');
      }
    }
  });
});
