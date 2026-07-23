/// <reference types="vite/client" />

declare namespace JSX {
  type Element = HTMLElement;
  interface IntrinsicElements {
    [eleName: string];
  }
}

declare module "*/data.yaml" {
  const content: {
    name: string;
    introduction: string;
    friends: [
      {
        name: string;
        link: string;
        icon: string;
        brief: string;
      },
    ];
    links: {
      bilibili: string;
      blog: string;
      email: string;
      github: string;
      gitee: string;
      zhihu: string;
    };
    music: number;
  };
  export default content;
}
