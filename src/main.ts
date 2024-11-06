import './components/gh_link';
import './components/hitokoto';
import './components/light_btn';

import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/scale.css';

try {
    tippy('.friend', {
        content(reference) {
            const id = reference.getAttribute('tippy-id');
            const template = document.getElementById(id ? id : "");
            return template ? template.innerHTML : "";
        },
        allowHTML: true,
        interactive: true
    });
} catch (err) { }

import APlayer from "aplayer";
import 'aplayer/dist/APlayer.min.css';

const songid = 1299289240;

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
async function initAplayer() {
    let detail = await fetchSongDetail(songid);
    let lyric = await fetchSongLyric(songid);
    try {
        new APlayer({
            container: document.getElementsByTagName("APlayer-js")[0],
            lrcType: 1,
            audio: [{
                name: detail.name,
                artist: detail.artists.map((artist: { name: any; }) => artist.name).join(', '),
                url: `https://music.163.com/song/media/outer/url?id=${songid}.mp3`,
                cover: detail.album.picUrl,
                lrc: lyric
            }]
        });
    } catch (err) {
        console.error('Error initializing APlayer:', err);
    }
}

initAplayer();

import './style.scss';