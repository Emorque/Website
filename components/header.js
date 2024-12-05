const template = document.createElement("template");
template.innerHTML = `
    <div class="navbar">
        <ul>
            <li><a href="/">About Me</a></li>
            <li><a href="/experience.html">Experience</a></li>
            <li><a href="/projects.html">Projects</a></li>
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