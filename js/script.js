//Richiesta esercizio: Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//Ho un counter pari a 0

/*
let numeriTotali = 0;
const arrayNumero = [];

//creo ciclo for per generare in input dieci numeri
for (let i = 1; i <= 10; i++) {
  let inputNumero = Number(prompt('Indica il numero che desideri ' + i));

  //Digitando il numero richiesto devo aggiungerlo ai numeriTotali
  numeriTotali = numeriTotali + inputNumero;

  arrayNumero.push(inputNumero);
}
console.log(arrayNumero);
console.log('La somma è: ' + numeriTotali);
*/

/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.
*/

const numbersArray = [];
let numbersSomma = 0;

while (numbersSomma < 50) {
  const userNumber = prompt('Inserire numero che andrà sommato');
  if (isNaN(userNumber)) {
    alert('Devi digitare solamente un numero che abbia cifre al suo interno');
  } else {
    numbersArray.push(userNumber);
    numbersSomma += +userNumber;
  }
}

console.log('Il risultato finale è' + numbersSomma);
