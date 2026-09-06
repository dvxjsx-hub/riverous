console.log("riverous iniciado");
const enterBtn = document.getElementById("enter-btn");
const usernameInput = document.getElementById("username");
let currentUser = "INVITADO";

enterBtn.addEventListener("click", function() {currentUser = usernameInput.value; profileUsername.textContent = currentUser; document.getElementById("welcome").style.display = "none"; document.getElementById("home").style.display = "block";});

const profileBtn = document.getElementById("profile-btn");
const profileMenu = document.getElementById("profile-menu");
const profileUsername = document.getElementById("profile-username");

profileUsername.textContent = currentUser;
profileBtn.addEventListener("click", function() {profileMenu.style.display = "block";});
const closeProfileBtn = document.getElementById("close-profile-btn"); closeProfileBtn.addEventListener("click", function() {profileMenu.style.display = "none";});

const settingsBtn = document.getElementById("settings-btn");
const settingsMenu = document.getElementById("settings-menu");

settingsBtn.addEventListener("click", function() {settingsMenu.style.display = "block";});

const closeSettingsBtn = document.getElementById("close-settings-btn");

closeSettingsBtn.addEventListener("click", function() {settingsMenu.style.display = "none";});