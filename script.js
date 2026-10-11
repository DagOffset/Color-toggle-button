const bottone = document.getElementById("btn-1");
const quadrato = document.getElementById("di-v");

bottone.addEventListener("click", () => {
  if (quadrato.style.backgroundColor === "red") {
    quadrato.style.backgroundColor = "purple";
    bottone.textContent = "Bottone Viola"
  } else {
    quadrato.style.backgroundColor = "red";
    bottone.textContent = "Bottone Rosso"
  }
});

