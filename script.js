// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const enterScreen = document.getElementById("enter-screen");
  const container = document.querySelector(".container");
  const backgroundVideo = document.querySelector(".background-video");
  const audio = document.getElementById("background-audio");

  // Ensure the enter screen and container exist
  if (enterScreen && container && backgroundVideo) {
    enterScreen.addEventListener("click", () => {
      // Hide the enter screen
      enterScreen.style.display = "none";

      // Show the main container
      container.style.display = "flex";

      // Remove blur from background video
      backgroundVideo.style.filter = "none";

      // Play audio if it exists
      if (audio) {
        audio.play().catch((err) => {
          console.error("Audio playback failed:", err);
        });
      }
    });
  } else {
    console.error("Missing DOM elements. Check your HTML structure.");
  }
});
