class BlogView extends HTMLElement {
    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <back-btn></back-btn>
            <section class="blogposts">
                <blogpost-card
                    title='3 Estrategias para no Desperdiciar tu Tiempo en cuarentena'
                    content='Algo muy difícil para muchos de nosotros es aprovechar nuestro tiempo, terminar nuestras responsabilidades a tiempo y no dejar todo para último momento. Las siguientes recomendaciones te ayudarán a aprovechar mucho mejor tu valioso tiempo.'
                    url='https://platzi.com/blog/tecnicas-gestion-tiempo/'
                ></blogpost-card>
            </section>
        `;
        return template;
    }

    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('blog-view', BlogView);
