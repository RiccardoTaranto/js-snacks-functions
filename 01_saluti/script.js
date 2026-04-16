/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName1 = 'Mario';


// Function declararion ( dichiarazione standard)
function greetingsStandard (userName) {
  const message = `Ciao ${userName}`;
  return message;
}
// Invocazione function standard
const greetingsStandardInvocation = greetingsStandard(userName1);
console.log(greetingsStandardInvocation);


//////////////////////////////////////////////


// Function expression (dichiarazione moderna)
const greetingsModern = userName1 => `Ciao ${userName1}`;

// Invocazione function expression
const greetingsModernInvocation = greetingsModern(userName1);
console.log(greetingsModernInvocation);


//Risultato atteso se si passa 'Mario': // ciao Mario
