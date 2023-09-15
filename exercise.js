// const sum = function (a, b) {
//   return a + b;
// }

const sum = (a, b) => a + b;

// const subtract = function (a, b) {
//   return a - b;
// }

const subtract = (a, b) => a - b;

// const multiply = function (a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b;

// const divide = function (a, b) {
//   return a / b;
// }

const divide = (a, b) => a / b;

// const log = function (value) {
//   console.log(value);
// }

const log = value => console.log(value);

//Richiama funzione divide (in quanto ultima operazione da fare), inserisci i due valori da dividere
//---> al suo interno inserire la funzione subtract con i valori da sottrarre, ecc...

const result = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);

console.log(result);