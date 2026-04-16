/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui. (STANDARD)
function getVowels(word) {
    const filterVowel = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i][0].includes('a', 'e', 'i', 'o', 'u')) {
            filterVowel.push([i][0])
        }
    }
    return filterVowel;
}
// Invoca la funzione qui e stampa il risultato in console
const filterVowel = getVowels(word);
console.log(filterVowel);


/////////////////////////////////////////////////////////////////////////


// Dichiara la funzione qui. (MODERN)
const getByVowels = word => {
    const filterByVowel = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i][0].includes('a', 'e', 'i', 'o', 'u')) {
            filterByVowel.push([i][0])
        }
    }
    return filterVowel;
}
// Invoca la funzione qui e stampa il risultato in console
const filterByVowels = getByVowels(word);
console.log(filterByVowels);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)