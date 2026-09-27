// ==== INICIO ====
console.log("riverous iniciado");
// ==== FUNCIONES ====
function mostrarPantalla(pantalla) {
  pantalla.style.display = "block";
}
function ocultarPantalla(pantalla) {
  pantalla.style.display = "none";
}

// ==== BOTÓN DE INICIO ====
const PlayBtn = document.getElementById("playbtn");
const Log = document.getElementById("login");
PlayBtn.addEventListener("click", function() {
  ocultarPantalla(log);
  mostrarPantalla(home);
});

// ==== GRAVITY RUN ====
const GRbutton = document.getElementById("GRbutton")
const GRmenu = ducument.getElementById("GRmenu")
const GRclose = document.getElementById("GRclose")

GRbutton.addEventListener("click", function() {
  ocultarPantalla(home);
  mostrarPantalla(GRmenu);
});

// ==== CONFIGURACIÓN ====
const SettingsBtn = document.getElementById("settingsbtn");
const SettingsMenu = document.getElementById("settingsmenu");

SettingsBtn.addEventListener("click", function() {
  SettingsMenu.style.display = "block";
});

const CloseSettingsBtn = document.getElementById("closesettingsbtn");

CloseSettingsBtn.addEventListener("click", function() {
  SettingsMenu.style.display = "none";
});