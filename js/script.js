/* 
*chiedere cognome //
*inserirlo in un array ove son già presenti dei cognomi //
*stampa la lista ordinata per alfabeto //
*stampa la posizione dell utente + 1
*/

//var cognomi e chiedere all utente il proprio
var cognomi = ["rossi", "bianchi", "neri", "verdi"];
var cognomeUtente = prompt("Inserire il proprio cognome");
//inserire il cognome utente
cognomi.push(cognomeUtente);
//stamp in ordine alfabetico
console.log(cognomi.sort());
//stamp la posizione utente
var posizioneUtente = cognomi.indexOf(cognomeUtente) + 1; //restituisce un valore numerico al quale va addizionato 1
console.log(posizioneUtente);

