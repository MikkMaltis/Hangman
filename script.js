const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÕÄÖÜ'.split('');
const word = 'AMETIKOOL'.split('');
let guess = [...Array(word.length).keys()].map(i => '_');

const wordDiv = document.getElementById('word');
const alphabetDiv = document.getElementById('alphabet');

for ( let i in guess ) {
    const letterDiv = document.createElement('div');
    letterDiv.setAttribute = ('id', 'letter' + i);
    letterDiv.innerText = guess[i];
    wordDiv.appendChild(letterDiv);
}

for ( let i in alphabet ) {
    const aDiv = document.createElement('div');
    aDiv.setAttribute = ('id', alphabet[i]);
    aDiv.innerText = alphabet[i];
    wordDiv.appendChild(aDiv);
}

document.addEventListener('keyup', e => {
    const g = e.key.toUpperCase();
    if ( alphabet.includes(g) ) {
        if ( word.includes(g) ) {
            for ( let i in word) {
                if ( word[i] == g) {
                    const letterDiv = document.getElementById('letter_' + i);
                    letterDiv.innerText = g;
                }
            }
        }
    }
});