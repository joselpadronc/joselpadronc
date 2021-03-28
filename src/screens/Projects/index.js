class ProjectsView extends HTMLElement {
    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <back-btn></back-btn>
            <section class="projects">
                <project-card
                    title='CornFlix'
                    category='Personal Project'
                    tecnologies='React.js, HTML, CSS'
                    url='https://github.com/joselpadronc/corn-flix'
                    image='../src/assets/img/reactjs.png'
                    ></project-card>
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

customElements.define('projects-view', ProjectsView);
