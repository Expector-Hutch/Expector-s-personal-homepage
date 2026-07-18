import "./style.scss";

import { FriendLink, FriendLinksCtr } from "./components/FriendLink";
import GithubLink from "./components/GithubLink";
import Hitokoto from "./components/Hitokoto";
import "./components/IconLink";
import LightBtn from "./components/LightBtn";
import MusicPlayer from "./components/MusicPlayer";

import { render } from "nano-jsx";

import IconLink from "./components/IconLink";
import github_icon from "~icons/simple-icons/github?color=%23ffffff";
import gitee_icon from "~icons/simple-icons/gitee?color=%23c71d23";
import zhihu_icon from "~icons/simple-icons/zhihu?color=%230084ff";

import data from "./data/data.yaml";

function App() {
  return (
    <div class="main-card">
      <aside id="head-image"></aside>
      <main>
        <GithubLink href="https://github.com/Expector-Hutch/Expector-s-personal-homepage"></GithubLink>

        <h1 id="title">{data.name}</h1>

        <p id="self-introduction" innerHTML={{ __dangerousHtml: data.introduction }}></p>

        <p class="hitokoto">
          &emsp;&emsp;『<Hitokoto></Hitokoto>』
        </p>

        <div id="friends">
          <p>友链</p>

          <FriendLinksCtr>
            {data.friends.map(f => (
              <FriendLink name={f.name} href={f.link} icon={f.icon}>
                {f.brief}
              </FriendLink>
            ))}
          </FriendLinksCtr>
        </div>

        <div class="app-links">
          <LightBtn color="#ff1f71" href={data.links.bilibili}>
            哔站
          </LightBtn>
          <LightBtn color="#2bd2ff" href={data.links.blog}>
            博客
          </LightBtn>
          <LightBtn color="#11ff45" href={data.links.email}>
            邮箱
          </LightBtn>
        </div>

        <MusicPlayer id={data.music}></MusicPlayer>

        <div class="more-links">
          <IconLink href={data.links.github} icon={github_icon}></IconLink>
          <IconLink href={data.links.gitee} icon={gitee_icon}></IconLink>
          <IconLink href={data.links.zhihu} icon={zhihu_icon}></IconLink>
        </div>

        <footer>
          <p>
            &copy; 2022-2026&nbsp;
            <a href="https://expector.netlify.app/" target="_blank">
              Expector
            </a>
            <br />
            Text:&nbsp;
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              title="Creative Commons License Details"
              target="_blank"
            >
              CC BY-NC-ND
            </a>
            &nbsp;&mdash;&nbsp;Code:&nbsp;
            <a href="https://github.com/Expector-Hutch/Expector-s-personal-homepage/blob/main/LICENSE">
              GPL v3.0
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

render(<App />, document.getElementById("root"));
