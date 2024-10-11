import word from './text.js'

let words = word
let otv = ''
let first_enter = true
for (let i = 0; i <= words.length - 1; i++) {
    if (words[i] == '\n') {
        if (!first_enter) {
            otv += '<br/>'
        } else {
            first_enter = false
        }
    } else {
        otv += words[i]
    }
}
document.getElementById('block').innerHTML = otv;
let width = document.body.clientWidth
document.getElementById('block').style.fontSize = `${width / 700}rem`


addEventListener('resize', (event) => {
    let width = document.body.clientWidth
    document.getElementById('block').style.fontSize = `${width / 700}rem`
})
