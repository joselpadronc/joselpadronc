class PrimaryBtn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <a href="projects.html" class="btn-portafolio">
                Briefcase
            </a>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            .btn-portafolio {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 22px;
                color: #fff;
                text-decoration: none;
                border-radius: 8px;
                height: 40px;
                background-color: #02212b;
                margin-top: 145px;
                border: 1px solid #fff;
                box-shadow: 0px 8px 8px rgba(168, 168, 168, 0.1), 0px 4px 4px rgba(152, 152, 152, 0.2);
            }
            :host([elipse]) {
                position: absolute;
                max-width: 320px;
                margin: 0 auto;
                margin-top: -140px;
                left: 0;
                right: 0;
            }
        </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('primary-btn', PrimaryBtn);
