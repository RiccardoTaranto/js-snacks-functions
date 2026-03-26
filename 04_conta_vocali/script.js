/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getVowels(string){ 
let counter = 0;
for (let i =0; i<string.length; i++){
 if (string[i].includes('a') || string[i].includes('e') || string[i].includes('i') || string[i].includes('o') || string[i].includes('u')) {
 counter++; 
}
}
return counter;
}

// Invoca la funzione qui e stampa il risultato in console
const filteredVowels = getVowels(word);
console.log(filteredVowels);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)