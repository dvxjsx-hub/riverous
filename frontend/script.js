console.log("riverous iniciado");
const enterbtn = document.getElementById("enter-btn");
enterbtn.addEventListener("click", function() {document.getElementById("welcome").style.display = "none"; document.getElementById("home").style.display = "block";});

const profileBtn = document.getElementById("profile-btn");
const profileMenu = document.getElementById("profile-menu");

profileBtn.addEventListener("click", function() {profileMenu.style.display = "block";});
const closeProfileBtn = document.getElementById("close-profile-btn"); closeProfileBtn.addEventListener("click", function() {profileMenu.style.display = "none";});

const settingsBtn = document.getElementById("settings-btn");
const settingsMenu = document.getElementById("settings-menu");

settingsBtn.addEventListener("click", function() {settingsMenu.style.display = "block";});
