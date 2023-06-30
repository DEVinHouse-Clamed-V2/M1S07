let darkModeToggle = document.querySelector("#darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  let darkAtivo = seEstaDark();
  if (darkAtivo) {
    document.documentElement.setAttribute("data-bs-theme", "light");
    darkModeToggle.innerText = "Modo Escuro";
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    darkModeToggle.innerText = "Modo Claro";
  }
});

function seEstaDark() {
  let darkModeSetado =
    document.documentElement.getAttribute("data-bs-theme") === "dark";

  return darkModeSetado;
}
