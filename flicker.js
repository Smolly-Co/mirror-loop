document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("argInput");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let value = input.value.trim().toLowerCase(); // normalize input

      const validInputs = [
        "observervoid",
        "observer.void",
        "observer-void",
        "observer void"
      ];

      if (validInputs.includes(value)) {
        document.body.classList.add("flash-morse");

        // Simulate Morse flicker and then redirect
        setTimeout(() => {
          document.body.classList.remove("flash-morse");
          window.location.href = "document.html";
        }, 4000); // enough time to flash
      }
    }
  });
});
