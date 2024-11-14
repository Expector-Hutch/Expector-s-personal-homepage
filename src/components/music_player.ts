import './music_player.scss';

import APlayer from 'aplayer-ts';

export class MusicPlayerElement extends HTMLElement {
    constructor() {
        super();
        const id = parseInt(this.id);
        this.fetchSongDetail(id).then((detail) => {
            if (detail) {
                this.fetchSongLyric(id).then((lyric) => {
                    if (lyric) {
                        try {
                            APlayer().init({
                                container: this,
                                lrcType: 1,
                                audio: [
                                    {
                                        name: detail.name,
                                        artist: detail.artists
                                            .map(
                                                (artist: { name: any }) =>
                                                    artist.name,
                                            )
                                            .join(', '),
                                        url: `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
                                        cover: detail.album.picUrl,
                                        lrc: lyric,
                                    },
                                ],
                            });
                        } catch (err) {
                            console.error('Error initializing APlayer:', err);
                        }
                    }
                });
            }
        });
    }

    async fetchSongDetail(songId: number) {
        try {
            const response = await fetch(
                `/music/api/song/detail/?id=${songId}&ids=%5B${songId}%5D`,
            );
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
    async fetchSongLyric(songId: number) {
        try {
            const response = await fetch(
                `/music/api/song/lyric?id=${songId}&lv=1&kv=1&tv=-1`,
            );
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
}

customElements.define('music-player', MusicPlayerElement);
