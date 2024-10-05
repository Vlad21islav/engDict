import word from './text.js'

window.onload = function() {
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
};