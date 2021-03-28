class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section class="elipse">
                <img src="../src/assets/img/Ellipse.png" alt="">
                <div class="elipse-content">
                    <primary-btn elipse ></primary-btn>
                </div>
            </section>
            <footer>
                <div class="footer-content">
                    <div class="menu">
                        <div class="logo-footer">
                        <p>Joselpadronc</p>
                        </div>
                        <ul>
                        <li><a href="index.html">Start</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="#" class="modal-contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="otros">
                        <ul>
                        <li class="footer-email"></li>
                        <li><a href="https://undraw.co/" target="_blank">Ilustraciones by UnDraw.co </a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            .elipse img {
                margin-bottom: -10px;
                width: 100%;
                height: 80px;
            }

            .elipse-content {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 15px;
            }

            footer {
                background-color: #f6f6f6;
                padding: 25px 15px;
            }
            .footer-content {
                width: 100%;
                max-width: 1024px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: repeat(2, auto);
                align-items: center;
                justify-content: space-between;
            }

            .menu, .otros {
                padding: 15px;
            }

            .logo-footer p {
                display: none;
            }

            .menu ul li, .otros ul li {
                list-style: none;
                margin: 15px 0;
            }

            .menu ul li a {
                cursor: pointer;
                font-weight: 600;
                text-decoration: none;
                color: #000;
            }

            .menu ul {
                padding: 0;
            }

            .otros ul li a {
                color: #000;
            }

            .footer-email::after {
                content: "padroncjosel@gmail.com";
                color: #000;
            }
            @media screen and (min-width: 768px) {
                .logo-footer p {
                    display: block;
                    text-align: center;
                    color: #000;
                    font-size: 20px;
                    border-bottom: 1px solid #000;
                }

                .menu ul {
                    display: flex;
                }

                .menu ul li a {
                    padding: 0 15px 0 0;
                }
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

customElements.define('footer-el', Footer);
