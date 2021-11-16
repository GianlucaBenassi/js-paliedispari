// Palidroma 
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola');

if (palindrome(userWord)) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}

function palindrome(word) {

    let mirrorWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        mirrorWord += word[i];
    }

    if (word == mirrorWord) {
        return true
    }

    return false

}