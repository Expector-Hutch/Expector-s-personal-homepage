# Expector's Personal Homepage

**我的[个人主页](https://expector.netlify.app)！**

## 开发/部署工具/语言（堆图标）
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Git](https://img.shields.io/badge/Git-f34f29?style=for-the-badge&logo=git&logoColor=white)
![Github](https://img.shields.io/badge/Github-161b22?style=for-the-badge&logo=github&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-149cab?style=for-the-badge&logo=netlify&logoColor=white)
<br>![HTML5](https://img.shields.io/badge/H5-f5580a?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-cc6699?style=for-the-badge&logo=sass&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-007dc6?style=for-the-badge&logo=css3&logoColor=white)
![JScript](https://img.shields.io/badge/JS-f7df1e?style=for-the-badge&logo=javascript&logoColor=white)
![Markdown](https://img.shields.io/badge/MD-black?style=for-the-badge&logo=markdown&logoColor=white)
![APlayer.js](https://user-images.githubusercontent.com/105506585/209420486-d56689af-ea02-441a-bd8f-2a98d662fe98.svg)

## 目录注解

```
expector-hutch.github.io
|  .gitignore             git 忽略文件
│  404.html               404 页面
│  index.html             主页面
│  LICENSE                许可证 (GPL3)
│  README.md              说明文件
├─fonts                   字体文件
│ └  lucida-handwrit.ttf  lucida handwrit 西文字体
├─script                  脚本
│ └  main.py              主脚本
└─style                   预处理样式
  │  aplayer.scss         APlayer 播放器样式
  │  main.scss            主样式
  │  pcmain.scss          宽屏设备附加样式
  │  pemain.scss          竖屏设备附加样式
  └  tippy.scss           Tippy 友链卡片样式
```
*本项目图片等资源均使用外链*

## 构建

确保电脑安装了`sass`以及`rapydscript`，如无可使用`npm`安装：

```powershell
npm i -g sass
npm i -g rapydscript
```

运行以下命令即可完成构建：
```powershell
sass style:css --style=compressed
rapydscript -6 script/main.py -o js/main.js
```
