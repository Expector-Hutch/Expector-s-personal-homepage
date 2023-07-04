/*
Expector's personal homepage  Copyright (C) 2022  Expector-Hutch
This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
This is free software, and you are welcome to redistribute it
under certain conditions; type `show c' for details.
*/

tippy('.friend', {
    content(reference) {
        const id = reference.getAttribute('tippy-id');
        const template = document.getElementById(id);
        return template.innerHTML;
    }
});

window.oncontextmenu = function (e) {
    //取消默认的浏览器自带右键
    e.preventDefault();
}
