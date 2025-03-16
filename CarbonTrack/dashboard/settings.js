document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme");
    });
});
