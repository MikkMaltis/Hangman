const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÕÄÖÜ'.split('');
const word = 'AMETIKOOL'.split('');

let guess = [...Array(word.length).keys()].map(i => '_');

const wordDiv = document.getElementById('word');

for ( let i in guess ) {
    const letterDiv = document.createElement('div');
    letterDiv.setAttribute = ('id', 'letter' + i);
    letterDiv.innerText = guess[i];
    wordDiv.appendChild(letterDiv);
}

document.addEventListener('keyup', e => {
    if ( alphabet.includes(e.key.toUpperCase()) ) {
        if ( word.includes(g) ) {
            for ( let i in word) {
                if ( word[i] == g) {
                    const letterDiv = document.getElementById('letter_' + i);
                }
            }
        }
    console.log(e.key);
    }
});