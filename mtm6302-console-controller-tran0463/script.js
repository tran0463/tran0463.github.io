// variable declarations
let $title = document.getElementById('title');
let $description = document.querySelector('p');
let $body = document.getElementById('override')
let $para = document.getElementById('paragraph')
// functions
function setTitle(a) {
    $title.textContent = a
}
function setDescription(a) {
    $description.textContent = a
}
function setBackgroundColor(a) {
    $body.style.backgroundColor = a
}
function setFontColor(a) {
    $body.style.color = a
    $para.style.color = a
}
function setTheme(a) {
    switch (a) {
        // light theme by default, deal with it B)
        case 0:
            $body.classList.add('light')
            $body.classList.remove('dark')
        break;
        case 1:
            $body.classList.remove('light')
            $body.classList.add('dark')
        break;
        case undefined:
            $body.classList.add('light')
            $body.classList.remove('dark')
        break;
    }
}
