import "./icon_links.scss";

function defineIconLinkElement(tagName: string, icon: string): void {
    class IconLinkElement extends HTMLElement {
        constructor() {
            super();
            this.innerHTML = icon;
            this.replaceChildren(<a href={this.getAttribute("href")}>{this.children[0]}</a>);
        }
    }
    customElements.define(tagName, IconLinkElement);
}

import github_icon from "~icons/simple-icons/github";
defineIconLinkElement("github-link", github_icon);

import gitee_icon from "~icons/simple-icons/gitee";
defineIconLinkElement("gitee-link", gitee_icon);

import zhihu_link from "~icons/simple-icons/zhihu";
defineIconLinkElement("zhihu-link", zhihu_link);
