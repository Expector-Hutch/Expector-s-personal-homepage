import tippy from "tippy.js";
try {
    tippy('.friend', {
        content(reference) {
            const id = reference.getAttribute('tippy-id');
            const template = document.getElementById(id);
            return template.innerHTML;
        },
        interactive: true
    });
} catch (err) { }

try {
    window.oncontextmenu = function (e) {
        e.preventDefault();
    }
} catch (err) { }