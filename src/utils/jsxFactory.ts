interface entityMapData {
    [key: string]: string;
}

export const entityMap: entityMapData = {
    "&": "amp",
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "#39",
    "/": "#x2F",
};

export const escapeHtml = (str: object[] | string) =>
    String(str).replace(/[&<>"'/\\{}]/g, s => `&${entityMap[s]};`);

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

export function DOMcreateElement(
    tag: ((attrs: { [key: string]: unknown }) => HTMLElement) | string,
    attrs?: { [key: string]: unknown },
    ...children: (HTMLElement | string | SVGElement)[]
): HTMLElement | SVGElement {
    attrs = attrs || {};
    const stack: unknown[] = [...children];

    if (typeof tag === "function") {
        attrs.children = stack;
        return tag(attrs) as HTMLElement;
    }

    // 判断是否为 SVG 元素
    const isSvgElement = [
        "svg",
        "path",
        "g",
        "rect",
        "circle",
        "line",
        "polyline",
        "polygon",
        "text",
        "defs",
        "use",
        "symbol",
    ].includes(tag);

    const elm = isSvgElement
        ? document.createElementNS(SVG_NAMESPACE, tag)
        : document.createElement(tag);

    for (let [name, val] of Object.entries(attrs)) {
        if (val == null) continue;

        // SVG 属性需要使用 setAttributeNS 或普通 setAttribute（SVG 命名空间下两者都行）
        elm.setAttribute(name, String(val));
    }

    while (stack.length) {
        const child = stack.shift();

        if (Array.isArray(child)) {
            stack.push(...child);
        } else if (child instanceof Node) {
            elm.appendChild(child);
        } else if (child != null) {
            elm.appendChild(document.createTextNode(String(child)));
        }
    }

    return elm;
}

export function DOMcreateFragment(
    attrs?: { [key: string]: unknown },
    ...children: (HTMLElement | string)[]
): (HTMLElement | string)[] {
    console.log(attrs);
    return children;
}
