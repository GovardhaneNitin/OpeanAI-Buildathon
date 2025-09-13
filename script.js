// Enhanced smooth scrolling
document.querySelector(".cta-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#demo").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

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
  .querySelectorAll(".problem-card, .feature-card, .step, .api-card")
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
  .querySelectorAll(".problem-card, .feature-card, .step, .api-card")
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    });
  });
