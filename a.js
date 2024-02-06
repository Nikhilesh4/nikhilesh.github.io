function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}
document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");

  const texts = [
    "T. Nikhilesh",
    "a passionate CSE student",
    "an enthusiastic programmer",
  ];
  let currentIndex = 0;

  function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }

  setInterval(updateText, 1000);
});
