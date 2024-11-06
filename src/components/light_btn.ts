import { generateID } from "../utils/generateID";

class LightBtnElement extends HTMLElement {
    constructor() {
        super();
        const id = generateID();
        const color = this.getAttribute("color");
        this.innerHTML  = /*html*/`
                <div class="light-btn-${id}">
                    <a href="${this.getAttribute("href")}" target="_blank">
                        ${this.innerHTML}
                    </a>
                </div>
                <style>
                    .light-btn-${id}::before, .light-btn-${id}::after {
                        background-color: ${color};
                        box-shadow: 0 0 5px ${color},
                            0 0 15px ${color},
                            0 0 30px ${color},
                            0 0 60px ${color};
                    }
                    .light-btn-${id} {
                        position: relative;
                        width: 150px;
                        height: 33px;
                        margin: 0px 20px;
                    }
                    .light-btn-${id}:hover::before {
                        width: 80%;
                        height: 50%;
                        border-radius: 30px;
                        bottom: 0px;
                    }
                    .light-btn-${id}:hover::after {
                        width: 80%;
                        height: 50%;
                        border-radius: 30px;
                        top: 0px;
                    }
                    .light-btn-${id}:hover a {
                        letter-spacing: 3px;
                    }
                    .light-btn-${id}:hover a::before {
                        transform: skew(45deg) translateX(100px);
                    }
                    .light-btn-${id}::before {
                        content: '';
                        position: absolute;
                        left: 50%;
                        width: 30px;
                        height: 10px;
                        transform: translateX(-50%);
                        border-radius: 10px;
                        transition: 0.5s;
                        bottom: -5px;
                    }
                    .light-btn-${id}::after {
                        content: '';
                        position: absolute;
                        left: 50%;
                        width: 30px;
                        height: 10px;
                        transform: translateX(-50%);
                        border-radius: 10px;
                        transition: 0.5s;
                        top: -5px;
                    }
                    .light-btn-${id} a {
                        text-decoration: none;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: rgba(255, 255, 255, 0.05);
                        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 30px;
                        color: #fff;
                        z-index: 1;
                        font-weight: 400;
                        letter-spacing: 1px;
                        overflow: hidden;
                        transition: 0.5s;
                        backdrop-filter: blur(20px);
                    }
                    .light-btn-${id} a::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 50%;
                        height: 100%;
                        background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
                        transform: skew(45deg) translateX(0);
                        transition: 0.5s;
                    }
                </style>
            `;
        }
    }


customElements.define('light-btn', LightBtnElement);