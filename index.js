const homeButton = document.getElementById('home-button');
const expButton = document.getElementById('experience-button');
const projectButton = document.getElementById('projects-button');

homeButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

const expContainer = document.getElementById('experience');

expButton.addEventListener('click', () => {
    window.scrollTo(0, expContainer.getBoundingClientRect().top + window.scrollY - 70)
})


const projectContainer = document.getElementById('projects');

projectButton.addEventListener('click', () => {
    window.scrollTo(0, projectContainer.getBoundingClientRect().top + window.scrollY - 68)
})


const typeswitchPhoto = document.getElementById('typeswitch-photo');
const typeswitchButton = document.getElementById('typeswitch-button');
const typeswitchPath = typeswitchButton.querySelector('path');


typeswitchButton.addEventListener("click", () => {
    if (typeswitchPath.getAttribute('d') === "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393") {
        typeswitchPhoto.src = "gifs/TypeSwitch_demo.gif";
        typeswitchPath.setAttribute('d', "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5") 
    } else {
        typeswitchPhoto.src = "img/typeswitch.png";
        typeswitchPath.setAttribute('d', "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393") 
    }
});

// OT photo
const otPhoto = document.getElementById('ot-photo');
const otButton = document.getElementById('ot-button');
const otPath = otButton.querySelector('path');

otButton.addEventListener("click", () => {
    if (otPath.getAttribute('d') === "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393") {
        otPhoto.src = "gifs/OT_UI_demo.gif";
        otPath.setAttribute('d', "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5") 
    } else {
        otPhoto.src = "img/octopath.webp";
        otPath.setAttribute('d', "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393") 
    }
});

const steamfiberPhoto = document.getElementById('steamfiber-photo');
const steamfiberButton = document.getElementById('steamfiber-button');
const steamfiberPath = steamfiberButton.querySelector('path');

steamfiberButton.addEventListener("click", () => {
    if (steamfiberPath.getAttribute('d') === "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393") {
        steamfiberPhoto.src = "gifs/SteamFiber_demo.gif";
        steamfiberPath.setAttribute('d', "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5") 
    } else {
        steamfiberPhoto.src = "img/steamfiber.webp";
        steamfiberPath.setAttribute('d', "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393") 
    }
});