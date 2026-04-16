/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito.

Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui. (STANDARD)
function userGreetings(name) {
  const getTime = new Date().getHours();
  if (getTime <= 13) {
    return `Buongiorno ${name}`;
  } else if (getTime <= 17) {
    return `Buon pomeriggio ${name}`;
  } else (getTime <= 23)
  return `Buonasera ${name}`;
}
// Invoca la funzione qui e stampa il risultato in console
const greetings = userGreetings(name);
console.log(greetings);


///////////////////////////////////////////////////////////

// Dichiara la funzione qui. (moderno)
const userRegards = (name) => {
  const getTime = new Date().getHours();

  if (getTime <= 13) {
    return `Buongiorno ${name}`;
  } else if (getTime <= 17) {
    return `Buon pomeriggio ${name}`;
  } else (getTime <= 23)
    return `Buonasera ${name}`;
}
// Invoca la funzione qui e stampa il risultato in console
const regards = userRegards(name);
console.log(regards);





//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.