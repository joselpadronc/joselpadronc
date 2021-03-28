class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'image', 'url', 'category', 'tecnologies'];
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
                <a href="${this.url}" class="projects-card-content" target="_blank">
                    <img src="${this.image}" alt="Image of project">
                    <h4>${this.title}</h4>
                    <h6><strong>Category: </strong>${this.category}</h6>
                    <p><strong>Used Tecnologies: </strong><br>${this.tecnologies}</p>
                </a>
            </article>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            .card {
                background-color: #f3f8fb;
                border-radius: 8px;
                margin-top: 15px;
                padding: 15px;
                width: 250px;
                box-shadow: 0px 8px 8px rgba(2, 33, 43, 0.1), 0px 4px 4px rgba(152, 152, 152, 0.2);
            }

            a {
                text-decoration: none;
                color: black;
            }

            .card img {
                background-color: skyblue;
                width: 100%;
                border-radius: 8px;
            }

            .card h4 {
                margin: 0;
                margin-top: 12px;
                font-size: 22px;
            }
            .card h6,
            .card p {
                margin: 0;
                margin-top: 12px;
                font-size: 14px;
            }

            .card-content {
                text-decoration: none;
                color: #000;
                cursor: pointer;
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

customElements.define('project-card', ProjectCard);
