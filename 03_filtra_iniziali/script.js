/* Scrivi una funzione che accetti un'array di stringhe e una lettera 
e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui (STANDARD)
function getNames(names, letter) {
  const filterLetter = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === letter) {
      filterLetter.push(names[i]);
    }
  }
  return filterLetter;
}
// Invoca la funzione qui e stampa il risultato in console
const filterNames = getNames(names, "A");
console.log(filterNames);


////////////////////////////////////////////////////////////


// Dichiara la funzione qui (MODERN)
const getByNames = (names, letter) => {
  const filterLetter = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === letter) {
      filterLetter.push(names[i]);
    }
  }
  return filterLetter;
}
// Invoca la funzione qui e stampa il risultato in console
const filterLetter = getByNames(names, "A");
console.log(filterLetter);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"*
