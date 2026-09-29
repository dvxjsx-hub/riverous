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
const Nickname = document.getElementById("nickname");
const PlayBtn = document.getElementById("playbtn");
const Log = document.getElementById("login");
const Home = document.getElementById("home");
PlayBtn.addEventListener("click", function() {
  const Name = Nickname.value; document.getElementById("user").textContent = "Bienvenido, " + Name;
  if (Name === "") {
     console.log("Ingresa un Nickname")
  }
  else {
    ocultarPantalla(Log);
    mostrarPantalla(Home);
  }
});

// ==== MENU =====

// ==== GRAVITY RUN ====
const GRbutton = document.getElementById("GRbutton")
const GRmenu = document.getElementById("GRmenu")
const GRclose = document.getElementById("GRclose")

GRbutton.addEventListener("click", function() {
  ocultarPantalla(Home);
  mostrarPantalla(GRmenu);
});

GRclose.addEventListener("click", function() {
  mostrarPantalla(Home);
  ocultarPantalla(GRmenu);
});

// ==== CONFIGURACIÓN ====
const SettingsBtn = document.getElementById("settingsbtn");
const SettingsMenu = document.getElementById("settingsmenu");
const SettingsClose = document.getElementById("closesettingsbtn");

SettingsBtn.addEventListener("click", function() {
  ocultarPantalla(Home);
  mostrarPantalla(SettingsMenu);
});

SettingsClose.addEventListener("click", function() {
  ocultarPantalla(SettingsMenu);
  mostrarPantalla(Home);
});