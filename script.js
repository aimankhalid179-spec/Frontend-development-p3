// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ================= HERO DYNAMIC TEXT =================

const changeTextBtn = document.getElementById("changeTextBtn");
const heroText = document.getElementById("heroText");

changeTextBtn.addEventListener("click", function () {

    heroText.textContent =
        "I am currently developing my frontend skills through practical projects at DecodeLabs.";

    changeTextBtn.textContent = "Content Updated";

});


// ================= ABOUT BUTTON =================

const aboutBtn = document.getElementById("aboutBtn");
const aboutMessage = document.getElementById("aboutMessage");

aboutBtn.addEventListener("click", function () {

    if (aboutMessage.style.display === "block") {

        aboutMessage.style.display = "none";
        aboutBtn.textContent = "Read More";

    } else {

        aboutMessage.style.display = "block";
        aboutBtn.textContent = "Hide";

    }

});


// ================= CONTACT BUTTON =================

const contactBtn = document.getElementById("contactBtn");
const contactInfo = document.getElementById("contactInfo");

contactBtn.addEventListener("click", function () {

    if (contactInfo.style.display === "block") {

        contactInfo.style.display = "none";
        contactBtn.textContent = "Show Contact";

    } else {

        contactInfo.style.display = "block";
        contactBtn.textContent = "Hide Contact";

    }

});


// ================= PROJECT BUTTONS =================

const projectButtons =
    document.querySelectorAll(".project-btn");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.textContent = "Project Selected";

    });

});


// ================= MOBILE NAV LINK =================

const links =
    document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});