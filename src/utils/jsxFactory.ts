interface entityMapData {
    [key: string]: string;
}

export const entityMap: entityMapData = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": '#39',
    '/': '#x2F',
};

export const escapeHtml = (str: object[] | string) =>
    String(str).replace(/[&<>"'\/\\{}]/g, (s) => `&${entityMap[s]};`);

export function DOMcreateElement(
    tag: Function | string,
    attrs?: { [key: string]: any },
    ...children: (HTMLElement | string)[]
): HTMLElement {
    attrs = attrs || {};
    const stack: any[] = [...children];

    if (typeof tag === 'function') {
        attrs.children = stack;
        return tag(attrs);
    }

    const elm = document.createElement(tag);

    for (let [name, val] of Object.entries(attrs)) {
        elm.setAttribute(name, val?.toString() || '');
    }

    while (stack.length) {
        const child = stack.shift();

        if (!Array.isArray(child)) {
            elm.appendChild(
                (child as HTMLElement).nodeType == null
                    ? document.createTextNode(child.toString())
                    : child,
            );
        } else {
            stack.push(...child);
        }
    }

    return elm;
}

export function DOMcreateFragment(
    attrs?: { [key: string]: any },
    ...children: (HTMLElement | string)[]
): (HTMLElement | string)[] {
    console.log(attrs);
    return children;
}
