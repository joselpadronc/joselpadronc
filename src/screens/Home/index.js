class HomeView extends HTMLElement {
    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="figura">
                <img src="../src/assets/img/Figura.png" alt="">
            </div>
            <section class="main">
                <div class="presentation">
                <h1>Hi, I'm José Padrón.</h1>
                <p>I’m the Jr. WEB developer and I always try to learn constantly.</p>
                <primary-btn></primary-btn>
                </div>
                <div class="banner">
                <img src="../src/assets/img/undraw_coding_6mjf.svg" alt="Banner">
                </div>
            </section>
            <section class="skills">
                <h1>My skills</h1>
                <div class="content-skills">
                <!-- SKILLS FRONT -->
                <article class="skills-card">
                    <h4>FRONTEND</h4>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/html.png" alt="">
                        <p>HTML</p>
                        <p class="level">Solid basics</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/css3.png" alt="">
                        <p>CSS</p>
                        <p class="level">Solid basics</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/bootstrap.png" alt="">
                        <p>Bootstrap</p>
                        <p class="level">Solid basics</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/javascript.png" alt="">
                        <p>JavaScript</p>
                        <p class="level">Solid basics</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/reactjs.png" alt="">
                        <p>React.js</p>
                        <p class="level">Fundamentals</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/typescript.png" alt="">
                        <p>TypeScript</p>
                        <p class="level">For Learning</p>
                    </div>
                    </div>
                </article>
                <!-- SKILLS BACK -->
                <article class="skills-card">
                    <h4>BACKEND</h4>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/python.png" alt="">
                        <p>Flask</p>
                        <p class="level">Fundamentals</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/django.png" alt="">
                        <p>Django</p>
                        <p class="level">Fundamentals</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/nodejs.png" alt="">
                        <p>Node JS</p>
                        <p class="level">Fundamentals</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/php.png" alt="">
                        <p>PHP</p>
                        <p class="level">For Learning</p>
                    </div>
                    </div>
                    <div class="skill-card_content">
                    <div class="skill-tech">
                        <img src="../src/assets/img/golang.png" alt="">
                        <p>GO</p>
                        <p class="level">For Learning</p>
                    </div>
                    </div>
                </article>
                </div>
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

customElements.define('home-view', HomeView);
