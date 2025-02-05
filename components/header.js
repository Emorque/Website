const template = document.createElement("template");
template.innerHTML = `
    <div class="navbar">
        <ul>
            <li><a href="/" id="home-button"><img src="img/logo.svg" width="40" height="40" alt="My own Logo"/></a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
    </div>
`;

// testing


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