//Richiesta esercizio: Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//Ho un counter pari a 0

let numeriTotali = 0;
const arrayNumero = [];

//creo ciclo for per generare in input dieci numeri
for (let i = 1; i <= 10; i++) {
  let inputNumero = Number(prompt('Indica il numero che desideri ' + i));

  //Digitando il numero richiesto devo aggiungerlo ai numeriTotali
  conteggio = numeriTotali + inputNumero;

  arrayNumero.push(inputNumero);
}
console.log(arrayNumero);
console.log('La somma è: ' + conteggio);
