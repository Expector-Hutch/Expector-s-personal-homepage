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
        // const link_element = document.getElementById(`friend-link-${id}`);
        // const card_element = document.getElementById(`friend-card-${id}`)?.innerHTML;
        // if (link_element) {
        //     tippy(link_element, {
        //         content: card_element,
        //         allowHTML: true,
        //         interactive: true
        //     });
        // }
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
        // const friend_links = friend_link_elements.map(child => child.getElementsByClassName('friend-link')[0]);
        const tippyInstances = tippy(friend_link_elements, {
            content: (reference) => reference.getElementsByClassName("friend-card")[0],
            allowHTML: true
        });
        createSingleton(tippyInstances, { moveTransition: 'transform 0.2s ease-out' });
    }
}

customElements.define('friend-links-ctr', FriendLinksCtrElement);