//inizializzazione variabili
const firstName = prompt("dimmi il tuo nome");
const lastName = prompt("dimmi il tuo cognome");
const color = prompt("dimmi il tuo colore preferito");
console.log(firstName, lastName , color);
const randomNumber = 21;

//stringa per la creazione della password
const password = firstName + lastName + color + randomNumber
console.log(password);

//password sempre in lowercase
const passwordLowercase = password.toLowerCase();

//output su span
document.getElementById('password').innerHTML = passwordLowercase;