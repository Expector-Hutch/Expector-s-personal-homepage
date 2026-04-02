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

export function DOMcreateElement(
    tag: ((attrs: { [key: string]: unknown }) => HTMLElement) | string,
    attrs?: { [key: string]: unknown },
    ...children: (HTMLElement | string)[]
): HTMLElement {
    attrs = attrs || {};
    const stack: unknown[] = [...children];

    if (typeof tag === "function") {
        attrs.children = stack;
        return tag(attrs);
    }

    const elm = document.createElement(tag);

    for (let [name, val] of Object.entries(attrs)) {
        elm.setAttribute(name, val?.toString() || "");
    }

    while (stack.length) {
        const child = stack.shift();

        if (!Array.isArray(child)) {
            elm.appendChild(
                (child as HTMLElement).nodeType == null
                    ? document.createTextNode(child?.toString?.() ?? "")
                    : (child as HTMLElement)
            );
        } else {
            stack.push(...(child as unknown[]));
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
