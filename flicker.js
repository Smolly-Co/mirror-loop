document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const input = document.getElementById('argInput');
  const morseSound = new Audio('morse-loop.mp3'); // Audio for Morse Code
  
  // Set up the flicker effect for the header
  let flickerTimeout;

  function startFlicker() {
    header.classList.add('glitchy');
  }

  function stopFlicker() {
    header.classList.remove('glitchy');
  }

  startFlicker(); // Start flickering immediately

  // Loop the Morse code audio
  morseSound.loop = true;
  morseSound.play();

  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      let userInput = input.value.trim().toLowerCase();

      if (userInput === 'observer void') {
        // If the correct command is entered
        window.location.href = 'https://smolly-co.github.io/mirror-loop/project-manager-log.html'; // Change the URL
        stopFlicker(); // Stop the flickering
        morseSound.pause(); // Stop the Morse Code audio loop
      } else {
        // You can add a failure response here if needed
        console.log('Invalid Command');
      }
    }
  });
});
