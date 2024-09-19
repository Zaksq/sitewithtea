document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  });
});
