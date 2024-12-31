<script lang="ts">
	export let text: string;

	import { onMount } from 'svelte';

	async function getQuote(): Promise<string> {
		try {
			const response = await fetch('https://v1.hitokoto.cn');
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const { hitokoto: quoteText } = await response.json();
			return quoteText;
		} catch (error) {
			throw error;
		}
	}

	onMount(() => {
		getQuote().then((quote) => {
			text = quote;
		});
	});
</script>

<span>
	{text}
</span>
