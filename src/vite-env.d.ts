/// <reference types="vite/client" />

declare namespace JSX {
    type Element = HTMLElement;
    interface IntrinsicElements {
        [eleName: string]: any;
    }
}

declare module '~icons/simple-icons/*' {
    const content: string;
    export default content;
}
