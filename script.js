const word = 'AMETIKOOL'.split('');
let guess = [...Array(word.length).keys().map(i => '_')];

for ( let i in guess ) {
    const letterDiv = document.createElement('div');
    letterDiv.setAttribute = ('id', 'letter' + i);
    letterDiv.innerText = guess[i];
    wordDiv.appendChild(letterDiv);
}

document.addEventListener('keydown'), (event) => {
    const letter = event.key.toUpperCase();
    const index = word.indexOf(letter);
    if ( index > -1 ) {
        guess[index] = letter;
        document.getElementById('letter' + index).innerText = letter;
    }
}