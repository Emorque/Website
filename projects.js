// NextDex photo
const nextdexPhoto = document.getElementById('nextdex-photo');
const nextdexButton = document.getElementById('nextdex-button');
const demo = "Demo";
const homepage = "Home Page";

nextdexButton.textContent = demo;  

nextdexButton.addEventListener("click", () => {
    if (nextdexButton.textContent === demo) {
        nextdexPhoto.src = "gifs/NextDex_demo.gif";
        nextdexButton.textContent = homepage;  
    } else {
        nextdexPhoto.src = "img/nextdex.png";
        nextdexButton.textContent = demo;  
    }
});

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