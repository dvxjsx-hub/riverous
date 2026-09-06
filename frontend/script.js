console.log("riverous iniciado");
const enterbtn = document.getElementById("enter-btn");
enterbtn.addEventListener("click", function() {document.getElementById("welcome").style.display = "none"; document.getElementById("home").style.display = "block";});

const profileBtn = document.getElementById("profile-btn");
const profileMenu = document.getElementById("profile-menu");

profileBtn.addEventListener("click", function() {profileMenu.style.display = "block";});