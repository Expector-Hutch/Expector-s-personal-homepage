export class HitokotoElement extends HTMLElement {
    constructor() {
        super();
        fetch('https://v1.hitokoto.cn')
            .then(response => response.json())
            .then(({ hitokoto: hitokotoText }) => {
                this.innerText = hitokotoText;
            });
    }
}

customElements.define('the-hitokoto', HitokotoElement);