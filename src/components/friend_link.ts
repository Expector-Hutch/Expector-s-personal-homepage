import './friend_link.scss';

import tippy from "tippy.js";

import { generateID } from "../utils/generateID";

export class FriendLinkElement extends HTMLElement {
    constructor() {
        super();
        let id = generateID(),
            icon = this.getAttribute("icon"),
            href = this.getAttribute('href'),
            name = this.getAttribute("name");
        this.innerHTML = /*html*/`
            <a id="friend-link-${id}" href="${href}">
                <img src="${icon}" alt="${name}">
            </a>
            <div id="friend-card-${id}" style="display: none;">
                <div>
                    <img src="${icon}" alt="${name}">
                    <h3>${name}</h3>
                </div>
                <hr>
                <p>${this.innerHTML}</p>
            </div>`;
        const link_element = document.getElementById(`friend-link-${id}`);
        const card_element = document.getElementById(`friend-card-${id}`)?.innerHTML;
        if (link_element) {
            tippy(link_element, {
                content: card_element,
                allowHTML: true,
                interactive: true
            });
        }
    }
}

customElements.define('friend-link', FriendLinkElement);