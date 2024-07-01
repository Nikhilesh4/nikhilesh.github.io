document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("home");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.getElementById("Skills");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(skillsSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
        } else {
          entry.target.classList.remove("loaded"); // Optional: remove class when out of view
        }
      });
    },
    { threshold: 0.3 }
  );

  const aboutSection = document.getElementById("about-container");
  observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
        } else {
          entry.target.classList.remove("loaded"); // Optional: remove class when out of view
        }
      });
    },
    { threshold: 0.3 }
  );

  const contactSection = document.getElementById("Contact");
  observer.observe(contactSection);
});

$(document).ready(function () {
  // Select all text elements within the navbar
  var navbarItems = $(
    ".navbar .navbar-brand, .navbar .nav-link ,.social,.imgc,.copy"
  );

  // Loop through each item and apply the fade-in effect with a delay
  navbarItems.each(function (index) {
    $(this)
      .delay(150 * index)
      .animate({ opacity: 1 }, 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.getElementById("Projects");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsSection.classList.add("visible");
        } else {
          projectsSection.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(projectsSection);
});

document.addEventListener("DOMContentLoaded", function () {
  var toggler = document.querySelector(".navbar-toggler");
  var navbar = document.getElementById("navbar");

  toggler.addEventListener("click", function () {
    navbar.classList.toggle("fixed-top");
  });
});

const button1 = document.querySelector(".btn1");

button1.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior

  // Check if screen width is <= 992px
  if (window.innerWidth >= 992) {
    // Add classes for the effect
    button1.classList.add("btn2--clicked");
    document.querySelectorAll("span").forEach((element) => {
      element.classList.add("expanded");
    });

    // Remove classes after a delay
    setTimeout(() => {
      button1.classList.remove("btn2--clicked");
      document.querySelectorAll("span").forEach((element) => {
        element.classList.remove("expanded");
      });

      // Scroll to the section with id="About"
      const contactSection = document.getElementById("About");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000); // Adjust timing as needed
  } else {
    // Direct to the section with id="About" for screen widths > 992px
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});

const button2 = document.querySelector(".btn2");

button2.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior

  // Check if screen width is <= 992px
  if (window.innerWidth >= 992) {
    // Add classes for the effect
    button2.classList.add("btn2--clicked");
    document.querySelectorAll("span").forEach((element) => {
      element.classList.add("expanded");
    });

    // Remove classes after a delay
    setTimeout(() => {
      button2.classList.remove("btn2--clicked");
      document.querySelectorAll("span").forEach((element) => {
        element.classList.remove("expanded");
      });

      // Scroll to the section with id="Contact"
      const contactSection = document.getElementById("Contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000); // Adjust timing as needed
  } else {
    // Direct to the section with id="Contact" for screen widths > 992px
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});


const texts = ["Web Developer", "A Programmer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".texta").textContent = letter;
  document.querySelector(".texta").classList.add("typing");

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // Delay before starting the next word
  } else {
    setTimeout(type, 100); // Typing speed
  }
})();
