window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});

document.addEventListener("DOMContentLoaded", function () {
  const yearsElement = document.getElementById("years");
  const clientsElement = document.getElementById("clients");

  const animateCounter = (element, start, end, suffix = "") => {
    let current = start;
    const step = (end - start) / 100;
    const interval = setInterval(() => {
      current += step;
      element.textContent = Math.floor(current) + suffix;
      if (current >= end) {
        clearInterval(interval);
        element.textContent = `${end}${suffix}`;
      }
    }, 10);
  };

  const handleScroll = () => {
    const section = document.getElementById("section1");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowScroll = window.scrollY + window.innerHeight;

    if (
      windowScroll > sectionTop &&
      windowScroll < sectionTop + sectionHeight
    ) {
      animateCounter(yearsElement, 0, 14, " лет");
      animateCounter(clientsElement, 0, 50, "+");
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll);
});

// const menuBtn = document.querySelector(".menu-icon");
// menuBtn.addEventListener("click", function () {
//   menuBtn.classList.toggle("active");
//   menu.classList.toggle("active");
//   closeBtn.classList.toggle("menu-btn");
//   adressBtn.classList.toggle("active");
// });

const toggleBar = () => {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");

  const menuIcon = document.getElementById("menuIcon");
  menuIcon.classList.toggle("active");
};

document.getElementById("menuIcon").onclick = toggleBar;

document.getElementById("menuIcon").onclick = toggleBar;

const showAlert = () => {
  document.getElementById("customAlert").classList.add("open");
};

const closeAlert = () => {
  console.log("here");
  document.getElementById("customAlert").classList.remove("open");
};

document.getElementById("year").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const requiredFields = form.querySelectorAll("input[required]");

  requiredFields.forEach((field) => {
    field.addEventListener("input", () => {
      const allFilled = Array.from(requiredFields).every(
        (input) => input.value.trim() !== ""
      );
      submitBtn.disabled = !allFilled;
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showAlert();
    // Add form submission logic here
  });
});

document.getElementById("closeAlertButton").onclick = closeAlert;
