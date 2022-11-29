let emojis = []
let a = 0
let $div = document.getElementById('content')

for (i = 128512; i < 129488; i++) {
    emojis[a] = `<div class="item"> <div>&#${i}</div> <div>${i}</div> </div>`;
    a += 1;
}