document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const input = document.getElementById('argInput');
  
  // Set up the flicker effect for the header
  let flickerTimeout;

  function startFlicker() {
    let morseCode = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."; // Example of Morse code for 'hello world'
    let morseIndex = 0;
    
    function flickerLoop() {
      if (morseIndex < morseCode.length) {
        if (morseCode[morseIndex] === '.') {
          header.style.color = 'black'; // Black for dot
        } else if (morseCode[morseIndex] === '-') {
          header.style.color = 'black'; // Black for dash
        } else {
          header.style.color = 'orange'; // Reset to original color (you can adjust to your preferred color)
        }
        morseIndex++;
      } else {
        morseIndex = 0; // Reset the index after a complete loop
      }
      flickerTimeout = setTimeout(flickerLoop, 200); // Adjust timing for flicker speed
    }

    flickerLoop(); // Start the flickering loop immediately
  }

  function stopFlicker() {
    clearTimeout(flickerTimeout); // Stop the flickering when needed
    header.style.color = 'orange'; // Reset to the original color
  }

  startFlicker(); // Start flickering immediately when the page loads

  // Setup to handle user input
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      let userInput = input.value.trim().toLowerCase();

      if (userInput === 'observer void') {
        // If the correct command is entered
        window.location.href = 'https://smolly-co.github.io/mirror-loop/project-manager-log.html'; // Change the URL
        stopFlicker(); // Stop the flickering
      } else {
        // Invalid command
        console.log('Invalid Command');
      }
    }
  });
});
