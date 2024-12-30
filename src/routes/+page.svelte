<script>
	import Card from '../components/Card.svelte';
	import Quote from '../components/Quote.svelte';
	import Image from '../components/Image.svelte';
	import LinkButton from '../components/linkButton.svelte';
	import Block from '../components/Block.svelte';
	import Footer from '../components/Footer.svelte';
	import MusicPlayer from '../components/MusicPlayer.svelte';

	import head_image from '../assets/images/head-image.webp';

	const name = 'Expector';
	const introduction = [
		'你好你好，我是 Exceptor！高中现役 OIer，热衷于计算机技术。虽然我的才华有限，但我总是乐于帮助他人，希望可以通过不同的方式与你建立联系，一起成长。',
		'我的兴趣非常广泛，从数学到编程，再到视频制作，我都乐此不疲。平时也会在B站分享一些内容，或是逛逛知乎寻找灵感。我还特别喜欢玩音游和二游，另外——最喜欢洛天依啦~如果你对这些也感兴趣，不妨加个好友吧！'
	];
	const quote_replace = '我思故我在';
</script>

<div class="page">
	<Card>
		<div class="card-inside">
			<Image src={head_image} width="20rem"></Image>
			<div class="main">
				<h1 class=" font-serif">{name}</h1>
				<p class="self-introduction">
					{#each introduction as item (item)}
						{'\u3000\u3000' + item + '\n'}
					{/each}
				</p>
				<Block>
					<p class="quote">
						&emsp;&emsp;『<Quote text={quote_replace} />』
					</p>
				</Block>
				<div class="app-links">
					<LinkButton href="https://space.bilibili.com/1530809275" text="哔站" color="#ff1f71"
					></LinkButton>
					<LinkButton href="https://www.cnblogs.com/expector/" text="博客" color="#2bd2ff"
					></LinkButton>
					<LinkButton href="mailto: expector-hutch@outlook.com" text="邮箱" color="#11ff45"
					></LinkButton>
				</div>
				<MusicPlayer songId={2151900715}></MusicPlayer>
				<Footer>
					<p>
						&copy; 2022-2024 <a href="https://expector.netlify.app/" target="_blank">Expector</a>
						<br />Text:
						<a
							href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
							title="Creative Commons License Details"
							target="_blank">CC-BY-NC-ND</a
						>
						&mdash; Code:
						<a
							href="https://github.com/Expector-Hutch/Expector-s-personal-homepage/blob/main/LICENSE"
							>GPL v3.0</a
						>
					</p>
				</Footer>
			</div>
		</div>
	</Card>
</div>

<style lang="scss">
	.page {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.card-inside {
		width: 964px;
		display: flex;
	}
	a {
		text-align: center;
		text-decoration-line: none;
		color: white;
		font-size: 16px;
		line-height: 10px;
		&:hover {
			color: white;
			text-shadow:
				0 0 7px #fff,
				0 0 10px #fff,
				0 0 21px #fff;
		}
	}
	.main {
		display: flex;
		justify-content: center;
		flex-direction: column;
		h1 {
			color: #66ccff;
			font-family: LHANDW;
		}
		p {
			white-space: pre-line;
			color: aqua;
		}
	}
	.app-links {
		display: inline-flex;
	}
</style>
