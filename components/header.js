const template = document.createElement("template");
template.innerHTML = `
    <div class="navbar">
        <ul>
            <li><a href="#containerVid">Imagine</a></li>
            <li><a href="#Impact">Impact</a></li>
            <li><a href="#News">News</a></li>
            <li><button class="theme-button" id="darkMode-button">Toggle Dark Mode</button></li>
            <li><button class="theme-button" id="slowmo-button">Slow Motion</button></li>
        </ul>
    </div>
`;

class CustomHeader extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const clone = template.content.cloneNode(true);
        shadow.appendChild(clone);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'components/header.css';

        shadow.appendChild(link);
    }
}

window.customElements.define("custom-header", CustomHeader);