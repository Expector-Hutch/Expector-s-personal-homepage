export class HitokotoElement extends HTMLElement {
    constructor() {
        super();
        this.getHitokoto().then(hitokoto => {
            this.innerHTML = hitokoto;
        });
    }

    async getHitokoto(): Promise<string> {
        try {
            const response = await fetch('https://tenapi.cn/v2/yiyan');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            try {
                const response = await fetch('https://uapis.cn/api/say');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return await response.text();
            } catch (error) {
                try {
                    const response = await fetch('https://v1.hitokoto.cn');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const { hitokoto: hitokotoText } = await response.json();
                    return hitokotoText;
                } catch (error) {
                    throw error;
                }
            }
        }
    }
}

customElements.define('the-hitokoto', HitokotoElement);