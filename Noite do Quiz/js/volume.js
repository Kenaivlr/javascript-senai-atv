// === CONTROLES DE ÁUDIO ===
const bgMusic = document.getElementById("bgMusic");
const volUpBtn = document.getElementById("volUp");
const volDownBtn = document.getElementById("volDown");
const muteBtn = document.getElementById("mute");

// Volume inicial (50%)
bgMusic.volume = 0.5;

volUpBtn.addEventListener("click", () => {
  if (bgMusic.volume < 1) {
    bgMusic.volume = Math.min(1, bgMusic.volume + 0.1);
  }
});

volDownBtn.addEventListener("click", () => {
  if (bgMusic.volume > 0) {
    bgMusic.volume = Math.max(0, bgMusic.volume - 0.1);
  }
});

muteBtn.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? "🔈" : "🔇";
});