/// <reference types="vite/client" />

declare namespace JSX {
  type Element = HTMLElement;
  interface IntrinsicElements {
    [eleName: string];
  }
}
