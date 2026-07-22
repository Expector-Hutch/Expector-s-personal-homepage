# Expector's Personal Homepage

**我的[个人主页](https://expector.netlify.app)！**

## 技术栈

![VSCode](https://img.shields.io/badge/vscodium-2F80ED?style=for-the-badge&logo=vscodium&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-149cab?style=for-the-badge&logo=netlify&logoColor=white)

![Node.js](https://img.shields.io/badge/nodejs-5FA04E?style=for-the-badge&logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Astro](https://img.shields.io/badge/astro-E93DC7?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 基础修改

只需修改 `src/data/data.yaml` 即可个性化自己的主页！

警告：作者懒得做亮色以及其他颜色主题的适配，要改配色最好去修改代码。

## 构建 & 运行

确保你已经安装了 `node.js` 和 `pnpm`，若无，可通过以下命令安装：

```sh
sudo apt install nodejs npm # 安装 node.js 以及 npm，示例为 debian 系系统
npm -g i pnpm # 安装 pnpm
```

接下来，在项目中运行

```sh
pnpm i
```

以安装依赖包，然后你可以通过

```sh
pnpm dev
```

在开发模式下启动项目，以及

```sh
pnpm build
```

构建项目。

提交代码前应运行格式化及检查

```sh
pnpm format
pnpm lint
```

执行

```sh
pnpm lint:fix
```

可自动修复部分错误。
