import './friend_link.scss';

import { generateID } from '../utils/generateID';

import tippy, { createSingleton } from 'tippy.js';

export class FriendLinkElement extends HTMLElement {
    constructor() {
        super();
        let icon = this.getAttribute("icon"),
            href = this.getAttribute('href'),
            name = this.getAttribute("name");
        this.innerHTML = /*html*/`
            <a class="friend-link" href="${href}">
                <img src="${icon}" alt="${name}">
            </a>
            <div class="friend-card">
                <div>
                    <img src="${icon}" alt="${name}">
                    <h3>${name}</h3>
                </div>
                <hr>
                <p>${this.innerHTML}</p>
            </div>`;
    }
}

customElements.define('friend-link', FriendLinkElement);

export class FriendLinksCtrElement extends HTMLElement {
    protected ID: string;
    constructor() {
        super();
        this.ID = generateID();
        const friend_link_elements = Array.from(this.children).filter(child => child.tagName.toLowerCase() === 'friend-link');
        console.log(friend_link_elements)
        const tippyInstances = tippy(friend_link_elements, {
            content: (reference) => reference.getElementsByClassName("friend-card")[0],
            allowHTML: true
        });
        createSingleton(tippyInstances, {
            interactive: true,
            allowHTML: true,
            placement: "top",
            offset: [0, 15],
            moveTransition: 'transform 0.2s ease-out',
            animation: "scale-extreme",
        });
    }
}

customElements.define('friend-links-ctr', FriendLinksCtrElement);