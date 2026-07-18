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

function App() {
  return (
    <div class="main-card">
      <aside id="head-image"></aside>
      <main>
        <GithubLink href="https://github.com/Expector-Hutch/Expector-s-personal-homepage"></GithubLink>

        <h1 id="title">Expector</h1>

        <p id="self-introduction">
          &emsp;&emsp;你好你好，我是 Exceptor！高中已退役
          OIer，热衷于计算机技术。虽然我的才华有限，但我总是乐于帮助他人，希望可以通过不同的方式与你建立联系，一起成长。
          <br />
          &emsp;&emsp;我的兴趣非常广泛，从数学到编程，再到视频制作，我都乐此不疲。平时也会在B站分享一些内容，或是逛逛知乎寻找灵感。我还特别喜欢玩音游和二游，另外——最喜欢洛天依啦~如果你对这些也感兴趣，不妨加个好友吧！
        </p>

        <p class="hitokoto">
          &emsp;&emsp;『<Hitokoto></Hitokoto>』
        </p>

        <div id="friends">
          <p>友链</p>

          <FriendLinksCtr>
            <FriendLink
              name="枫上天游"
              href="https://www.fstu.cc/"
              icon="https://avatars.githubusercontent.com/u/105190211?v=4"
            >
              一个普普通通的OIer，兴趣广泛
            </FriendLink>

            <FriendLink
              name="云帆沧海"
              href="https://budawu.github.io/"
              icon="https://avatars.githubusercontent.com/u/98736983?v=4"
            >
              勇敢为你，无畏地做白日梦 高中生/飞友/锦依卫/港区萌新指挥官
            </FriendLink>

            <FriendLink
              name="邱璇洛"
              href="https://qiuxuanluo.xlog.app/"
              icon="https://avatars.githubusercontent.com/u/72391548?v=4"
            >
              立志于做一些奇奇怪怪希望有点用的事~
            </FriendLink>

            <FriendLink
              name="HD Superman"
              href="https://hackertalk.net/users/186247014399643648"
              icon="https://avatars.githubusercontent.com/u/50064165?v=4"
            >
              Across the Great Wall, we can reach every corner in the world.
            </FriendLink>
          </FriendLinksCtr>
        </div>

        <div class="app-links">
          <LightBtn color="#ff1f71" href="https://space.bilibili.com/1530809275">
            哔站
          </LightBtn>
          <LightBtn color="#2bd2ff" href="https://www.cnblogs.com/expector/">
            博客
          </LightBtn>
          <LightBtn color="#11ff45" href="mailto: expector-hutch@outlook.com">
            邮箱
          </LightBtn>
        </div>

        <MusicPlayer id={420397887}></MusicPlayer>

        <div class="more-links">
          <IconLink href="https://github.com/Expector-Hutch/" icon={github_icon}></IconLink>
          <IconLink href="https://gitee.com/expector" icon={gitee_icon}></IconLink>
          <IconLink
            href="https://www.zhihu.com/people/shadowenderking"
            icon={zhihu_icon}
          ></IconLink>
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
