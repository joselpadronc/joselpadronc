class BlogpostCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'content', 'url'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attr] = newValue;
        }
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <article class="card">
                <h1>${this.title}</h1>
                <p>${this.content}</p>
                <a href="${this.url}" class="card-btn" target="_blank">Read more</a>
            </article>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            .card {
                background-color: #fff;
                border-radius: 8px;
                margin-top: 15px;
                padding: 15px;
                box-shadow: 0 2px 12px rgb(18 29 64 / 8%), 0 2px 8px rgb(18 29 64 / 12%);
            }

            .card-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                color: #000;
                font-weight: 600;
                margin: 15px 0px;
                height: 40px;
                font-size: 18px;
                background-color: #f3f8fb;
                border: 1px solid skyblue;
                border-radius: 8px;
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

customElements.define('blogpost-card', BlogpostCard);
