class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <nav class="navegation">
                <div class="nav-content">
                <div class="logo">
                    <p>Joselpadronc</p>
                </div>
                <button id="nav-menu_btn">Menu</button>
                <div class="nav-menu_items">
                    <ul>
                        <li>
                            <a href="index.html">Start</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="#" class="modal-contact">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            .navegation {
                position: fixed;
                right: 0;
                left: 0;
                padding: 15px;
                background-color: #02212b;
                z-index: 1;
                box-shadow: 0px 8px 8px rgba(2, 33, 43, 0.1), 0px 4px 4px rgba(2, 33, 43, 0.2);
            }

            .nav-content {
                display: flex;
                height: 45px;
                max-width: 1024px;
                margin: 0 auto;
                justify-content: space-between;
                align-items: center;
            }

            .logo p {
                color: #fff;
                font-size: 25px;
                border-bottom: 1px solid #fff;
            }

            #nav-menu_btn {
                z-index: 1;
                font-size: 16px;
                padding: 5px 10px;
                color: #fff;
                cursor: pointer;
                font-weight: bold;
                background-color: #02212b;
                border: 1px solid skyblue;
                border-radius: 8px;
            }

            .nav-menu_items {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                right: -100vw;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 27, 49, 0.605);
                transition: all .5s ease;
            }

            .nav-menu_items.is-active {
                right: 0;
            }

            ul {
                padding: 0;
            }

            .nav-menu_items li {
                display: block;
                list-style: none;
                padding: 15px;
                text-align: center;
            }

            .nav-menu_items a {
                text-decoration: none;
                font-size: 18px;
                font-weight: 600;
                color: #fff;
            }
            @media screen and (min-width: 768px) {
                #nav-menu_btn {
                    display: none;
                }
                .nav-menu_items {
                    position: relative;
                    display: flex;
                    justify-content: flex-end;
                    height: 0;
                    right: 0;
                }
                .nav-menu_items ul {
                    display: inline-flex;
                }
            }
        </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.handleClickMenu();
    }

    connectedCallback() {
        this.render();
    }

    handleClickMenu() {
        const menu = this.shadowRoot.querySelector(".nav-menu_items");
        const menuButton = this.shadowRoot.querySelector("#nav-menu_btn");
        menuButton.addEventListener("click", () => {
            if (menu.classList.contains("is-active")) {
                menu.classList.remove("is-active");
            } else {
                menu.classList.add("is-active");
            }
        });
    }
}

customElements.define('nav-bar', NavBar);
