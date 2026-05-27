(function () {
  const html = document.documentElement;
  const toggle = document.querySelector(".theme-switcher");
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    html.classList.add("dark-theme");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      html.classList.toggle("dark-theme");
      localStorage.setItem(
        "theme",
        html.classList.contains("dark-theme") ? "dark" : "light"
      );
    });
  }
})();
