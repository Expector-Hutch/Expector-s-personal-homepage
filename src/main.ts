import './style.scss';

import './components/gh_link';
import './components/hitokoto';
import './components/light_btn';
import './components/friend_links_ctr';
import './components/icon_links';

import APlayer from "aplayer";

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

fetchSongDetail(songid).then((detail) => {
    if (detail) {
        fetchSongLyric(songid).then((lyric) => {
            if (lyric) {
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
        });
    }
});