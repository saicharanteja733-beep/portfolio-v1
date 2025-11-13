// Typing Effect
const text = "Sai Teja";
let index = 0;

function typeEffect() {
  const typingElement = document.querySelector(".typing");
  if (!typingElement) return; // Prevent errors on pages without typing

  typingElement.textContent = text.slice(0, index);
  index++;

  if (index <= text.length) {
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Contact Form Validation
const contactform = document.getElementById("contact-form");
if (contactform) {
  contactform.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message Sent Successfully ✅");
  });
}

// Scroll Reveal Animation
function revealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 50) {
      element.classList.add('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
