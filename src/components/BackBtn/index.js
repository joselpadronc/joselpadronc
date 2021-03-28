class BackBtn extends HTMLElement {
    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="back-btn">
                <a href="index.html">
                    <img src="../src/assets/img/back-black.png" alt="Btn back">
                    <span>Volver</span>
                </a>
            </div>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            .back-btn {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 100px 15px 15px 15px;
                background-color: transparent;
                max-width: 1024px;
                margin: 0 auto;
            }

            .back-btn a {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px 15px;
                background-color: white;
                border-radius: 8px;
                font-size: 18px;
                font-weight: 600;
                color: black;
            }

            .back-btn a > img {
                margin-right: 5px;
            }
        </style>
        `;
    }

    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('back-btn', BackBtn);
