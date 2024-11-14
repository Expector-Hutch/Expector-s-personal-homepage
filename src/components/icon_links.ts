import './icon_links.scss';

abstract class IconLinkElement extends HTMLElement {
    protected icon: string;

    constructor(icon: string) {
        super();
        this.icon = icon;
        this.innerHTML = /*html*/ `
            <a href="${this.getAttribute('href')}">
                ${this.icon}
            </a>
        `;
    }
}

import github_icon from '~icons/simple-icons/github';
export class GithubLinkElement extends IconLinkElement {
    constructor() {
        super(github_icon);
    }
}
customElements.define('github-link', GithubLinkElement);

import gitee_icon from '~icons/simple-icons/gitee';
export class GiteeLinkElement extends IconLinkElement {
    constructor() {
        super(gitee_icon);
    }
}
customElements.define('gitee-link', GiteeLinkElement);

import zhihu_link from '~icons/simple-icons/zhihu';
export class ZhihuLinkElement extends IconLinkElement {
    constructor() {
        super(zhihu_link);
    }
}
customElements.define('zhihu-link', ZhihuLinkElement);
