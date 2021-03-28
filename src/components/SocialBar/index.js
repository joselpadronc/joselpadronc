class SocialBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <article class="networks">
                <div class="networks-card">
                    <div class="linkedin">
                        <a href="https://www.linkedin.com/in/joselpadronc" target="_blank">
                        <img src="../src/assets/img/linkedin.png" alt="Icono linkedin">
                        </a>
                    </div>
                    <div class="twitter">
                        <a href="https://twitter.com/joselpadronc" target="_blank">
                        <img src="../src/assets/img/twitter.png" alt="Icono Twitter">
                        </a>
                    </div>
                    <div class="github">
                        <a href="https://github.com/joselpadronc" target="_blank">
                        <img src="../src/assets/img/github.png" alt="Icono GitHub">
                        </a>
                    </div>
                    <div class="instagram">
                        <a href="https://www.instagram.com/joselpadronc/" target="_blank">
                        <img src="../src/assets/img/instagram.png" alt="Icono Instagram">
                        </a>
                    </div>
                </div>
            </article>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            .networks {
                margin: 0 auto;
                display: flex;
                justify-content: center;
                padding: 0 15px;
            }

            .networks-card {
                width: 95%;
                max-width: 380px;
                height: 55px;
                background-color: #fff;
                position: fixed;
                z-index: 1;
                display: flex;
                justify-content: space-around;
                align-items: center;
                box-shadow: 0px 8px 8px rgba(2, 33, 43, 0.1), 0px 4px 4px rgba(152, 152, 152, 0.2);
                border-radius: 8px;
                bottom: 12px;
            }

            .linkedin img,
            .twitter img,
            .github img,
            .instagram img {
                width: 28px;
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

customElements.define('social-bar', SocialBar);
