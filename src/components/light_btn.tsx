import style from "./light_btn.scss?inline";

export class LightBtnElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const color = this.getAttribute("color");
    const text = this.innerHTML;

    if (this.shadowRoot) {
      this.shadowRoot.replaceChildren(
        <div class={`light-btn`} style={{ "--btn-color": color }}>
          <a href={this.getAttribute("href")} target="_blank">
            {text}
          </a>
        </div>
      );

      const sheet = new CSSStyleSheet();
      sheet.replaceSync(style);
      this.shadowRoot.adoptedStyleSheets = [sheet];
    }
  }
}

customElements.define("light-btn", LightBtnElement);
