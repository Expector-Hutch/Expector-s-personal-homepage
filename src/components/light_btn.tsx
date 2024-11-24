import { DOMcreateElement } from '../utils/jsxFactory';

import style from './light_btn.module.scss';

import { generateID } from '../utils/generateID';

export class LightBtnElement extends HTMLElement {
    constructor() {
        super();
        const id = generateID();
        const color = this.getAttribute('color');
        const text = this.innerHTML;
        this.innerHTML = "";
        this.appendChild(
            <div class={`${style['light-btn']} light-btn light-btn-${id}`}>
                <a href={this.getAttribute('href')} target="_blank">
                    {text}
                </a>
                <style>
                    {`.light-btn-${id}::before, .light-btn-${id}::after {
                    background-color: ${color};
                    box-shadow: 0 0 5px ${color},
                        0 0 15px ${color},
                        0 0 30px ${color},
                        0 0 60px ${color};
                }`}
                </style>
            </div>);
    }
}

customElements.define('light-btn', LightBtnElement);
