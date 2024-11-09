export class HitokotoElement extends HTMLElement {
    constructor() {
        super();
        this.getHitokoto().then(hitokoto => {
            this.innerHTML = hitokoto;
        });
    }

    async getHitokoto(): Promise<string> {
        try {
            const response = await fetch('https://v1.hitokoto.cn');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log("v1.hitokoto.cn");
            const { hitokoto: hitokotoText } = await response.json();
            return hitokotoText;
        } catch (error) {
            try {
                const response = await fetch('https://tenapi.cn/v2/yiyan');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log("tenapi.cn");
                return await response.text();
            } catch (error) {
                try {
                    const response = await fetch('https://uapis.cn/api/say');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    console.log("uapis.cn");
                    return await response.text();
                } catch (error) {
                    throw error;
                }
            }
        }
    }
}

customElements.define('the-hitokoto', HitokotoElement);