// Enhanced smooth scrolling (guard if CTA exists)
const cta = document.querySelector(".cta-button");
if (cta) {
  cta.addEventListener("click", function (e) {
    e.preventDefault();
    const demo = document.querySelector("#demo");
    if (demo) {
      demo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".problem-card, .feature-card, .step, .api-card, .team-card, .team-brand, .chip, .pill"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "scale(0.9)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// PPT Controls functionality
document.querySelectorAll(".ppt-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Add your PPT control logic here
    console.log("PPT control clicked:", this.textContent);
  });
});

// Add loading states and micro-interactions
document
  .querySelectorAll(
    ".problem-card, .feature-card, .step, .api-card, .team-card"
  )
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    });
  });

// Team card tilt + spotlight interaction
document.querySelectorAll(".team-card[data-tilt]").forEach((card) => {
  const maxTilt = 8;
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1..1
    const py = (y / rect.height) * 2 - 1; // -1..1
    const rx = (-py * maxTilt).toFixed(2) + "deg";
    const ry = (px * maxTilt).toFixed(2) + "deg";
    card.style.setProperty("--rx", rx);
    card.style.setProperty("--ry", ry);
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  });
  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.removeProperty("--mx");
    card.style.removeProperty("--my");
  });
});
