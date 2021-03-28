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
                    title='Movi'
                    category='Personal Project'
                    tecnologies='HTML, CSS'
                    url='https://github.com/joselpadronc/movi'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_movi_991091f149.PNG'
                ></project-card>
                <project-card
                    title='Platzi Videos'
                    category='Personal Project'
                    tecnologies='HTML, CSS'
                    url='https://github.com/joselpadronc/platzi-video'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_platzi_Video_66b94d80b5.PNG'
                ></project-card>
                <project-card
                    title='API Books'
                    category='Personal Project'
                    tecnologies='Python, Flask'
                    url='https://github.com/joselpadronc/api-books'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_api_Books_df12872112.PNG'
                ></project-card>
                <project-card
                    title='Python Scraping'
                    category='Personal Project'
                    tecnologies='Python'
                    url='https://github.com/joselpadronc/python-scraping'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_python_Scraper_84a871bf9c.PNG'
                ></project-card>
                <project-card
                    title='CRUD Personas'
                    category='Personal Project'
                    tecnologies='HTML, CSS, JavaScript, Python, Django'
                    url='https://github.com/joselpadronc/CRUD_Persons'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_crud_Django_4d3dc3608c.PNG'
                ></project-card>
                <project-card
                    title='Conversor Moneda'
                    category='Personal Project'
                    tecnologies='HTML, CSS, JavaScript, Python, Django'
                    url='https://github.com/joselpadronc/ConversorMoneda'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_catalog_Django_7b479f2cff.PNG'
                ></project-card>
                <project-card
                    title='My personal Website'
                    category='Personal Project'
                    tecnologies='HTML, CSS, JavaScript'
                    url='https://github.com/joselpadronc/joselpadronc'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_favicon_d273a074da.png'
                ></project-card>
                <project-card
                    title='Platzi Users'
                    category='Personal Project'
                    tecnologies='HTML, CSS, JavaScript'
                    url='https://github.com/joselpadronc/platziUsers'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_platzi_Users_e65b57911c.PNG'
                ></project-card>
                <project-card
                    title='Contacts API'
                    category='Personal Project'
                    tecnologies='Node.js, Express'
                    url='https://github.com/joselpadronc/contactAPI'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_contacts_API_47da59525e.png'
                ></project-card>
                <project-card
                    title='Clipboard Web Components'
                    category='Personal Project'
                    tecnologies='HTML, CSS, JavaScript'
                    url='https://github.com/joselpadronc/clipboardWithWebComponents'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_web_Components_378c36ce08.jpg'
                ></project-card>
                <project-card
                    title='CornFlix'
                    category='Personal Project'
                    tecnologies='HTML, CSS, React.js'
                    url='https://github.com/joselpadronc/corn-flix'
                    image='https://api-joselpadronc.herokuapp.com/uploads/thumbnail_cornflix_4a27f8de82.png'
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
