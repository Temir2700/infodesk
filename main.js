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

const toggleBar = () => {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");

  const menuIcon = document.getElementById("menuIcon");
  menuIcon.classList.toggle("active");
};

document.getElementById("menuIcon").onclick = toggleBar;

window.addEventListener("resize", () => {
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.getElementById("menuIcon");
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
  }
});

const showAlert = () => {
  document.getElementById("customAlert").classList.add("open");
};

const closeAlert = () => {
  document.getElementById("customAlert").classList.remove("open");
};

document.getElementById("year").innerHTML = new Date().getFullYear();

const phoneInput = document.getElementById("phoneInput");
const submitBtn = document.querySelector(".submit-btn");

function toggleSubmitButton() {
  if (phoneInput.value.replace(/\D/g, "").length === 11) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
phoneInput.addEventListener("input", toggleSubmitButton);

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
});

document
  .getElementById("phoneForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    showAlert();

    const phone = document.getElementById("phoneInput").value;

    emailjs
      .send("service_mhqbfht", "template_ikxii1c", {
        phone: phone,
      })
      .then(
        function (response) {
          document.getElementById("response").innerText =
            "Сообщение отправлено успешно";
        },
        function (error) {
          document.getElementById("response").innerText =
            "Ошибка отправки сообщения";
        }
      );
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    showAlert();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send("service_mhqbfht", "template_16sfvak", {
        name: name,
        phone: phone,
        email: email,
        message: message,
      })
      .then(
        function (response) {
          document.getElementById("response").innerText =
            "Сообщение отправлено успешно";
        },
        function (error) {
          document.getElementById("response").innerText =
            "Ошибка отправки сообщения";
        }
      );
  });

document.getElementById("closeAlertButton").onclick = closeAlert;
