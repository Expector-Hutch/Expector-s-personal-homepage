import tippy from "tippy.js";
try {
    tippy('.friend', {
        content(reference) {
            const id = reference.getAttribute('tippy-id');
            const template = document.getElementById(id);
            return template.innerHTML;
        },
        interactive: true
    });
} catch (err) { }

import APlayer from 'APlayer';

import detail from '../data/detail.json';
import lyric from '../data/lyric.json';
const ap = new APlayer({
    container: document.getElementsByTagName("APlayer-js")[0],
    lrcType: 1,
    audio: [{
        name: detail.name,
        artist: detail.artists,
        url: 'https://music.163.com/song/media/outer/url?id=1299289240.mp3',
        cover: detail.picUrl,
        lrc: lyric.lyric
    }]
});
