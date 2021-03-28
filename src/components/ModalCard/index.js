class ModalCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <article class="modal-overley">
                <div class="modal">
                <div class="modal-title">
                    <h1>Contact me</h1>
                    <div class="modal-close">X</div>
                </div>
                <div class="otherforms">
                    <a href="https://api.whatsapp.com/send?phone=584121282503" class="whatsapp" target="_blanck">
                        <img src="../src/assets/img/whatsapp.png" alt="Whatsapp icon">
                        <p>Contact me by whatsapp</p>
                    </a>
                    <a href="https://www.instagram.com/joselpadronc" class="instagram-dm" target="_blanck">
                        <img src="../src/assets/img/instagram.png" alt="Instagram icon">
                        <p>Contact me by Instagram</p>
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
        .modal-overley {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100vw;
            display: none;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: rgba(0, 27, 49, 0.605);
        }

        .modal {
            width: 100%;
            max-width: 320px;
            background-color: #fff;
            padding: 10px;
            border-radius: 8px;
        }

        .modal-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: -30px;
            margin-bottom: 10px;
            padding: 10px;
            font-weight: bold;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0px 8px 8px rgba(2, 33, 43, 0.1), 0px 4px 4px rgba(152, 152, 152, 0.2);
        }

        .modal-close {
            color: white;
            font-size: 20px;
            font-weight: bold;
            background: red;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            cursor: pointer;
        }
        .modal-title h1 {
            text-align: center;
            font-size: 16px;
        }

        .modal-form input {
            width: 94%;
            margin-bottom: 15px;
            padding: 8px;
            border-style: none;
            border: 1px solid skyblue;
            border-radius: 8px;
            font-size: 14px;
        }

        .message-input {
            width: 94%;
            margin-bottom: 15px;
            padding: 8px;
            border-style: none;
            border: 1px solid skyblue;
            border-radius: 8px;
            font-size: 14px;
        }

        .send-btn {
            background-color: #02212b;
            border-style: none;
            border: 1px solid skyblue;
            border-radius: 8px;
            width: 100%;
            height: 35px;
            margin-bottom: 15px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        .otherforms {
            display: block;
        }

        .whatsapp, .instagram-dm {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 15px;
            cursor: pointer;
            color: #000;
            text-decoration: none;
        }

        .whatsapp img, .instagram-dm  img {
            width: 35px;
            height: 100%;
        }
        </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
        this.handleClickModal();
    }

    handleClickModal() {
        const closeModal = document.querySelector(".modal-close");
        const openModal = document.querySelector(".modal-contact");
        const modalOverley = document.querySelector(".modal-overley");

        openModal.addEventListener("click", (e) => {
            e.preventDefault();
            modalOverley.style.display = "flex";
        });

        closeModal.addEventListener("click", () => {
            modalOverley.style.display = "none";
        });
    }
}

customElements.define('modal-card', ModalCard);
