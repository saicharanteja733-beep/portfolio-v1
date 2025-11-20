// Typing Effect
const text = "Sai Teja";
let index = 0;

function typeEffect() {
  const typingElement = document.querySelector(".typing");
  if (!typingElement) return;

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
  contactform.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
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
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 50) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

async function getLocation() {
  const locationText = document.getElementById("location");
  const map = document.getElementById("map");

  // 1️⃣ Try HTML5 Geolocation (GPS)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        locationText.textContent = `📍 Live Location Enabled`;

        map.innerHTML = `
          <iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            src="https://www.google.com/maps?q=${lat},${lon}&z=14&output=embed">
          </iframe>
        `;
      },

      // 2️⃣ If user denies or error → Fallback to IP lookup
      async () => {
        await fetchIPLocation();
      }
    );
  } else {
    await fetchIPLocation();
  }
}

async function getAccurateLocation() {
    const locationText = document.getElementById("location");
    const mapDiv = document.getElementById("map");

    locationText.textContent = "⏳ Fetching location...";

    // First: Try GPS
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                locationText.textContent = `📍 GPS: ${lat.toFixed(4)}, ${lon.toFixed(4)}`;
                setMap(lat, lon);
            },
            () => {
                // GPS denied → fallback to free Mozilla location
                fetchMozillaLocation();
            },
            { enableHighAccuracy: true, timeout: 7000 }
        );
    } else {
        fetchMozillaLocation();
    }
}

// // FREE fallback using Mozilla Location Service
// async function fetchMozillaLocation() {
//     const locationText = document.getElementById("location");

//     try {
//         const res = await fetch("https://location.services.mozilla.com/v1/geolocate?key=test");
//         const data = await res.json();

//         const lat = data.location.lat;
//         const lon = data.location.lng;

//         locationText.textContent = `📍 WiFi Location: ${lat.toFixed(4)}, ${lon.toFixed(4)}`;

//         setMap(lat, lon);

//     } catch (err) {
//         locationText.textContent = "❌ Unable to fetch location.";
//     }
// }

// // Show on Google Maps
// function setMap(lat, lon) {
//     document.getElementById("map").innerHTML = `
//         <iframe 
//             width="100%" 
//             height="100%" 
//             style="border:0;" 
//             src="https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed"
//             loading="lazy">
//         </iframe>
//     `;
// }

// getAccurateLocation();
