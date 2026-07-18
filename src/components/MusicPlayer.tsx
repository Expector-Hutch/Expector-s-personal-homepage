import { Component } from "nano-jsx";
import "./MusicPlayer.scss";
import APlayer from "aplayer-ts";

interface MusicPlayerProps {
  id: number;
  apiBase?: string;
}

interface SongDetail {
  name: string;
  artists: { name: string }[];
  album: { picUrl: string };
}

class MusicPlayer extends Component<MusicPlayerProps> {
  private containerRef: HTMLDivElement | null = null;
  aplayerInstance: APlayer | null = null;

  private setContainer = (el: HTMLDivElement | null) => {
    this.containerRef = el;
  };

  didMount() {
    const { id, apiBase = "/music/api" } = this.props;

    if (!this.containerRef || !id) return;

    this.fetchSongDetail(id, apiBase)
      .then(detail => {
        if (detail) {
          return this.fetchSongLyric(id, apiBase).then(lyric => {
            if (lyric) {
              this.initPlayer(detail, lyric);
            }
          });
        }
      })
      .catch(err => console.error("MusicPlayer initialization error:", err));
  }

  private async fetchSongDetail(songId: number, apiBase: string): Promise<SongDetail | null> {
    try {
      const response = await fetch(`${apiBase}/song/detail/?id=${songId}&ids=%5B${songId}%5D`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data.songs[0];
    } catch (error) {
      console.error("Error fetching song detail:", error);
      return null;
    }
  }

  private async fetchSongLyric(songId: number, apiBase: string): Promise<string | null> {
    try {
      const response = await fetch(`${apiBase}/song/lyric?id=${songId}&lv=1&kv=1&tv=-1`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data.lrc.lyric;
    } catch (error) {
      console.error("Error fetching song lyric:", error);
      return null;
    }
  }

  private initPlayer(detail: SongDetail, lyric: string) {
    if (!this.containerRef) return;

    try {
      this.aplayerInstance = APlayer().init({
        container: this.containerRef,
        lrcType: 1,
        audio: [
          {
            name: detail.name,
            artist: detail.artists.map(artist => artist.name).join(", "),
            url: `https://music.163.com/song/media/outer/url?id=${this.props.id}.mp3`,
            cover: detail.album.picUrl,
            lrc: lyric,
          },
        ],
      });
    } catch (err) {
      console.error("Error initializing APlayer:", err);
    }
  }

  render() {
    return <div class="music-player-container" ref={this.setContainer}></div>;
  }
}

export default MusicPlayer;
