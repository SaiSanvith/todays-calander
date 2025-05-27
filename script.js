window.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("d");
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  el.textContent = today.toLocaleDateString(undefined, options);
});