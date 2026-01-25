/* ======================
   GLOBAL STATE
====================== */
const state = {
  roleIndex: 0,
  charIndex: 0,
  ticking: false
};

/* ======================
   TYPING EFFECT
====================== */
const roles = [
  "Frontend Developer",
  "JavaScript Engineer",
  "Python & ML Learner",
  "UI Builder"
];

const typingEl = document.getElementById("typing");

function type() {
  if (!typingEl) return;

  const current = roles[state.roleIndex];

  if (state.charIndex < current.length) {
    typingEl.textContent += current[state.charIndex++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (state.charIndex > 0) {
    typingEl.textContent =
      roles[state.roleIndex].slice(0, --state.charIndex);
    setTimeout(erase, 50);
  } else {
    state.roleIndex = (state.roleIndex + 1) % roles.length;
    setTimeout(type, 300);
  }
}

type();

/* ======================
   COPY EMAIL
====================== */
const emailEl = document.getElementById("email");
const copyBtn = document.getElementById("copyBtn");

if (emailEl && copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailEl.textContent);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    } catch {
      copyBtn.textContent = "Failed";
    }
  });
}

/* ======================
   PROJECT INTERACTION
====================== */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.border = "1px solid rgba(165,165,255,0.6)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.border = "1px solid transparent";
  });
});

/* ======================
   SIGNATURE
====================== */
console.log(
  "%cBuilt with Vanilla JavaScript",
  "color:#a5a5ff;font-size:12px;"
);
