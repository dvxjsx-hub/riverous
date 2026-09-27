// ==== INICIO ====
console.log("riverous iniciado");

// ==== VARIABLES DE USUARIO ====
const enterBtn = document.getElementById("enter-btn");

// ==== FUNCIONES ====
function mostrarPantalla(pantalla) {
  pantalla.style.display = "block";
}
function ocultarPantalla(pantalla) {
  pantalla.style.display = "none";
}

// ==== BOTÓN JUGAR ====
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", function() {
  ocultarPantalla(menu);
  mostrarPantalla(playMenu);
});
closePlayMenu.addEventListener("click", function() {
  ocultarPantalla(playMenu);
  mostrarPantalla(menu);
});

// ==== CONFIGURACIÓN ====
const settingsBtn = document.getElementById("settings-btn");
const settingsMenu = document.getElementById("settings-menu");

settingsBtn.addEventListener("click", function() {
  settingsMenu.style.display = "block";
});

const closeSettingsBtn = document.getElementById("close-settings-btn");

closeSettingsBtn.addEventListener("click", function() {
  settingsMenu.style.display = "none";
});