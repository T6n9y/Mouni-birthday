gsap.registerPlugin(ScrollTrigger);

const nodes = document.querySelector("#timelineNodes");
const modal = document.querySelector("#memoryModal");
const mediaBox = document.querySelector("#memoryMedia");
const ageLabel = document.querySelector("#memoryAge");
const title = document.querySelector("#memoryTitle");
const text = document.querySelector("#memoryText");
const secretText = document.querySelector("#secretText");

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

const letter = document.querySelector("#letterModal");
document.querySelector("#openLetter").addEventListener("click", () => letter.showModal());
document.querySelector("#closeLetter").addEventListener("click", () => letter.close());

document.querySelector("#startJourney").addEventListener("click", () => {
  document.querySelector("#timeline").scrollIntoView({ behavior: "smooth" });
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
