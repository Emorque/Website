// NextDex photo
// const nextdexPhoto = document.getElementById('nextdex-photo');
// const nextdexButton = document.getElementById('nextdex-button');
const demo = "Demo";
const homepage = "Home Page";

// nextdexButton.textContent = demo;  

// nextdexButton.addEventListener("click", () => {
//     if (nextdexButton.textContent === demo) {
//         nextdexPhoto.src = "gifs/NextDex_demo.gif";
//         nextdexButton.textContent = homepage;  
//     } else {
//         nextdexPhoto.src = "img/nextdex.png";
//         nextdexButton.textContent = demo;  
//     }
// });

// TypeSwitch photo
const typeswitchPhoto = document.getElementById('typeswitch-photo');
const typeswitchButton = document.getElementById('typeswitch-button');
typeswitchButton.textContent = demo;  

typeswitchButton.addEventListener("click", () => {
    if (typeswitchButton.textContent === demo) {
        typeswitchPhoto.src = "gifs/TypeSwitch_demo.gif";
        typeswitchButton.textContent = homepage;  
    } else {
        typeswitchPhoto.src = "img/typeswitch.png";
        typeswitchButton.textContent = demo;  
    }
});

// OT photo
const otPhoto = document.getElementById('ot-photo');
const otButton = document.getElementById('ot-button');
otButton.textContent = demo; 

otButton.addEventListener("click", () => {
    if (otButton.textContent === demo) {
        otPhoto.src = "gifs/OT_UI_demo.gif";
        otButton.textContent = homepage;  
    } else {
        otPhoto.src = "img/octopath.webp";
        otButton.textContent = demo;  
    }
});

const steamfiberPhoto = document.getElementById('steamfiber-photo');
const steamfiberButton = document.getElementById('steamfiber-button');
steamfiberButton.textContent = demo; 

steamfiberButton.addEventListener("click", () => {
    if (steamfiberButton.textContent === demo) {
        steamfiberPhoto.src = "gifs/SteamFiber_demo.gif";
        steamfiberButton.textContent = homepage;  
    } else {
        steamfiberPhoto.src = "img/steamfiber.webp";
        steamfiberButton.textContent = demo;  
    }
});