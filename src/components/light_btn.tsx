import style from "./light_btn.module.scss";

export class LightBtnElement extends HTMLElement {
    constructor() {
        super();
        const color = this.getAttribute("color");
        const text = this.innerHTML;
        const id = (color as string)
            .split("")
            .map(c =>
                c
                    .charCodeAt(0)
                    .toString(16)
                    .padStart(2, "0")
                    .split("")
                    .map(h => String.fromCharCode(65 + parseInt(h, 16)))
                    .join("")
            )
            .join("");
        this.replaceChildren(
            <div class={`${style["light-btn"]} light-btn light-btn-${id}`}>
                <a href={this.getAttribute("href")} target="_blank">
                    {text}
                </a>
                <style>
                    {
                        /* css */ `
                        .light-btn-${id}::before, .light-btn-${id}::after {
                            background-color: ${color};
                            box-shadow: 0 0 5px ${color},
                                0 0 15px ${color},
                                0 0 30px ${color},
                                0 0 60px ${color};
                        }`
                    }
                </style>
            </div>
        );
    }
}

customElements.define("light-btn", LightBtnElement);
