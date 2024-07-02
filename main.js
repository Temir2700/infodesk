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
