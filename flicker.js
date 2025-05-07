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
        window.location.href = "document.html"; // or your secret page
      }
    }
  });
});
