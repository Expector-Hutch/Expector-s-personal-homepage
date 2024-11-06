import './light_btn.scss';

import { generateID } from "../utils/generateID";

export class LightBtnElement extends HTMLElement {
    constructor() {
        super();
        const id = generateID();
        const color = this.getAttribute("color");
        this.innerHTML  = /*html*/`
                <div class="light-btn light-btn-${id}">
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
                </style>
            `;
        }
    }


customElements.define('light-btn', LightBtnElement);