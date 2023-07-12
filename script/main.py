'''
Expector's personal homepage  Copyright (C) 2022  Expector-Hutch
This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
This is free software, and you are welcome to redistribute it
under certain conditions; type `show c' for details.
'''

try:
    def _content(reference):
        id = reference.getAttribute('tippy-id')
        card = document.getElementById(id)
        return card.innerHTML
    tippy('.friend', {
        content: _content
    })
except Exception:
    pass

try:
    window.oncontextmenu = def(e):
        e.preventDefault()
except Exception:
    pass
