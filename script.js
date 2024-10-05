import word from './text.js'

window.onload = function() {
    let words = word
    let otv = ''
    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i] == ',') {
            otv += '<br/>'
        } else {
            otv += words[i]
        }
    }
    document.getElementById('block').innerHTML = otv;
};