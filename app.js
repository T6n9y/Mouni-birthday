gsap.registerPlugin(ScrollTrigger);

const nodes = document.querySelector("#timelineNodes");
const modal = document.querySelector("#memoryModal");
const mediaBox = document.querySelector("#memoryMedia");
const ageLabel = document.querySelector("#memoryAge");
const title = document.querySelector("#memoryTitle");
const text = document.querySelector("#memoryText");
const secretText = document.querySelector("#secretText");
const bgMusic = document.querySelector("#bgMusic");
const musicToggle = document.querySelector("#musicToggle");
let musicStarted = false;
function startMusic() {
  if (musicStarted) return;
  bgMusic.volume = 0.5;
  bgMusic.play().then(() => {
    musicStarted = true;
    musicToggle.classList.add("playing");
  }).catch(() => {
    // Autoplay was blocked — she'll need to tap the music button manually
  });
}

document.querySelector("#startJourney").addEventListener("click", () => {
  document.querySelector("#timeline").scrollIntoView({ behavior: "smooth" });
  startMusic();
});

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.classList.add("playing");
  } else {
    bgMusic.pause();
    musicToggle.classList.remove("playing");
  }
});

memories.forEach((memory) => {
  const button = document.createElement("button");
  button.className = "year-node";
  button.innerHTML = `
    <span class="year-number">${memory.age}</span>
    <span>
      <strong>${memory.title}</strong>
      <span>${memory.preview}</span>
    </span>
  `;
  button.addEventListener("click", () => openMemory(memory));
  nodes.appendChild(button);
});

function renderMedia(memory) {
  mediaBox.innerHTML = "";
  if (memory.mediaType === "image") {
    const img = document.createElement("img");
    img.src = memory.mediaSrc;
    img.alt = `Memory from age ${memory.age}`;
    mediaBox.appendChild(img);
  } else if (memory.mediaType === "video") {
    const video = document.createElement("video");
    video.src = memory.mediaSrc;
    video.controls = true;
    video.playsInline = true;
    mediaBox.appendChild(video);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "no-media";
    placeholder.textContent = "Add a photo or video for this chapter in memories.js";
    mediaBox.appendChild(placeholder);
  }
}

function openMemory(memory) {
  renderMedia(memory);
  ageLabel.textContent = `Age ${memory.age}`;
  title.textContent = memory.title;
  text.textContent = memory.text;
  secretText.textContent = memory.secret;
  secretText.style.display = "none";
  modal.showModal();

  gsap.fromTo(
    ".memory-modal",
    { opacity: 0, y: 25, scale: 0.96 },
    { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
  );
}

document.querySelector("#closeModal").addEventListener("click", () => {
  const video = mediaBox.querySelector("video");
  if (video) video.pause();
  modal.close();
});

document.querySelector("#revealBtn").addEventListener("click", () => {
  secretText.style.display = "block";
  gsap.fromTo(
    secretText,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
  );
});

const LETTER_PASSWORD = "mouni30"; // <-- set your own password here (case-sensitive)

const letter = document.querySelector("#letterModal");
const letterGate = document.querySelector("#letterGate");
const passwordInput = document.querySelector("#letterPassword");
const passwordError = document.querySelector("#passwordError");

document.querySelector("#openLetter").addEventListener("click", () => {
  passwordInput.value = "";
  passwordError.textContent = "";
  letterGate.showModal();
  setTimeout(() => passwordInput.focus(), 150);
});

document.querySelector("#closeGate").addEventListener("click", () => letterGate.close());
document.querySelector("#closeLetter").addEventListener("click", () => letter.close());

function tryUnlock() {
  if (passwordInput.value.trim().toLowerCase() === LETTER_PASSWORD.toLowerCase()) {
    letterGate.close();
    letter.showModal();
  } else {
    passwordError.textContent = "That's not quite it — try again ♡";
    letterGate.classList.add("shake");
    setTimeout(() => letterGate.classList.remove("shake"), 400);
  }
}

document.querySelector("#unlockLetter").addEventListener("click", tryUnlock);
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") tryUnlock();
});

gsap.from(".hero > *", { y: 30, opacity: 0, stagger: 0.14, duration: 1, ease: "power3.out" });

gsap.utils.toArray(".year-node").forEach((node) => {
  gsap.from(node, {
    scrollTrigger: { trigger: node, start: "top 88%" },
    opacity: 0, y: 30, duration: 0.6, ease: "power3.out"
  });
});

gsap.from(".finale > *", {
  scrollTrigger: { trigger: ".finale", start: "top 70%" },
  y: 28, opacity: 0, stagger: 0.13, duration: 0.75, ease: "power3.out"
});
