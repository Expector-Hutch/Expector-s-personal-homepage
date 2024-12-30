<script lang="ts">
	export let songId: number;

	import { onMount } from 'svelte';

	import APlayer from 'aplayer-ts';
	import 'aplayer-ts/src/css/base.css';

	async function fetchSongDetail(songId: number) {
		try {
			const response = await fetch(`/music/api/song/detail/?id=${songId}&ids=%5B${songId}%5D`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			return data.songs[0];
		} catch (error) {
			console.error('Error fetching song detail:', error);
			return null;
		}
	}
	async function fetchSongLyric(songId: number) {
		try {
			const response = await fetch(`/music/api/song/lyric?id=${songId}&lv=1&kv=1&tv=-1`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			return data.lrc.lyric;
		} catch (error) {
			console.error('Error fetching song lyric:', error);
			return null;
		}
	}

	let music_player: HTMLElement | undefined;

	onMount(() =>
		fetchSongDetail(songId).then((detail) => {
			if (detail) {
				fetchSongLyric(songId).then((lyric) => {
					if (lyric) {
						try {
							const aplayer = APlayer().init({
								container: music_player,
								lrcType: 1,
								audio: [
									{
										name: detail.name,
										artist: detail.artists.map((artist: { name: any }) => artist.name).join(', '),
										url: `https://music.163.com/song/media/outer/url?id=${songId}.mp3`,
										cover: detail.album.picUrl,
										lrc: lyric
									}
								]
							});
						} catch (err) {
							console.error('Error initializing APlayer:', err);
						}
					}
				});
			}
		})
	);
</script>

<div bind:this={music_player}></div>
