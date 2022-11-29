const $theme = document.getElementById('theme')
const $style = document.getElementById('list-style')
const $save = document.getElementById('submit')
const $cList = document.getElementById('cList')
const $cPref = document.getElementById('cPref')
const $list = document.getElementById('list')
const $form = document.getElementById('preferences')
let li = ['']
let text

// default theme and style
let theme = 'War'
let style = 'Midgard'

// generate the list dynamically, whatever that means
for (i = 0; i < 5; i++) {
    switch (i) {
        case 0:
            text = 'Denial'
            break
        case 1:
            text = 'Anger'
            break
        case 2:
            text = 'Bargaining'
            break
        case 3:
            text = 'Depression'
            break
        case 4:
            text = 'Acceptance'
            break
    }    
    li.push(`<li>${text}</li>`)
}

text = li.join('')
$list.insertAdjacentHTML("beforeend", text)

// Checks saved localStorage**
if (localStorage) {

    $cList.className = localStorage.getItem('theme')
    $cList.children.item(1).className = localStorage.getItem('theme')
    $cPref.className = localStorage.getItem('theme')
    document.body.className = localStorage.getItem('theme')

    for (const child of $list.children) {
        child.className = localStorage.getItem('style')
    }
}

// Changes theme and creates cookies based on theme and style selected
$save.addEventListener('click', async function(event) {
    event.preventDefault();
    theme = $theme.value
    style = $style.value
    
    $cList.className = theme
    $cList.children.item(1).className = theme
    $cPref.className = theme
    document.body.className = theme 

    for (const child of $list.children) {
        child.className = style
    }

    localStorage.setItem('theme', theme)
    localStorage.setItem('style', style)
})
