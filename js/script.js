// Palidroma 
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// const userWord = prompt('Inserisci una parola');

// if (palindrome(userWord)) {
//     console.log('La parola è palindroma');
// } else {
//     console.log('La parola non è palindroma');
// }

// function palindrome(word) {

//     let mirrorWord = '';

//     for (let i = word.length - 1; i >= 0; i--) {
//         mirrorWord += word[i];
//     }

//     if (word == mirrorWord) {
//         return true
//     }

//     return false

// }




// Pari e Dispari 
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const evenOdd = prompt('Scegli pari o dispari');
const userNumber = parseInt(prompt('Inserisci un numeri tra 1 e 5'));

const computerNumber = getRndInteger(1, 5);

if (winner(evenOdd, userNumber, computerNumber)) {
    console.log('Hai vinto! Numero scelto: ' + userNumber + ' Numero computer: ' + computerNumber);
} else {
    console.log('Hai perso! Numero scelto: ' + userNumber + ' Numero computer: ' + computerNumber);
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function winner(userChoise, num1, num2) {

    const somma = num1 + num2;

    if (somma % 2 == 0 && userChoise == 'pari') {
        return true;
    } else if (somma % 2 != 0 && userChoise == 'dispari') {
        return true;
    }

    return false;
}