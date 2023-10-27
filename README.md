# Expector's Personal Homepage

**我的[个人主页](https://expector.netlify.app)！**

## 开发/部署工具/语言
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Git](https://img.shields.io/badge/Git-f34f29?style=for-the-badge&logo=git&logoColor=white)
![Github](https://img.shields.io/badge/Github-161b22?style=for-the-badge&logo=github&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-149cab?style=for-the-badge&logo=netlify&logoColor=white)

![HTML5](https://img.shields.io/badge/H5-f5580a?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-cc6699?style=for-the-badge&logo=sass&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-007dc6?style=for-the-badge&logo=css3&logoColor=white)
![JScript](https://img.shields.io/badge/JS-f7df1e?style=for-the-badge&logo=javascript&logoColor=white)
![Markdown](https://img.shields.io/badge/MD-black?style=for-the-badge&logo=markdown&logoColor=white)
![APlayer.js](https://user-images.githubusercontent.com/105506585/209420486-d56689af-ea02-441a-bd8f-2a98d662fe98.svg)

## 目录注解

```
expector-hutch.github.io
|  .gitignore
|  .htmlnanorc            一个迂回解决编译器 BUG 的配置
│  404.html
|  data-download.js       将下载提供给 APlayer 的数据
│  index.html
│  LICENSE                GPL3
|  package-lock.json
|  package.json
│  README.md
|  yarn-error.log
|  yarn.lock
├─fonts
│ └  lucida-handwrit.ttf  首页标题字体文件
├─script
│ └  main.js
└─style
  │  aplayer.scss         APlayer 播放器样式
  │  main.scss            主样式
  │  pcmain.scss          宽屏设备附加样式
  │  pemain.scss          竖屏设备附加样式
  └  tippy.scss           Tippy 友链卡片样式
```

## 构建 & 运行

运行以下命令即可完成构建：
```powershell
yarn build
```
构建后的所有文件都将存储于 `dist` 目录中