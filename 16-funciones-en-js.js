//Funciones en JS
//Hoisting 
//es el comportamiento por defecto en el que el interprete mueve las declaraciones (variables y funciones), 
// a la parte superior de su ambito (scope), esto se realiza antes de ejeutar el codigo. 

//declaracion de una funcion 

// function add() {
//     console.log(10 + 20 );

// }

// add();

//la expresion de la funcion 

// const add2 = function() {
//     console.log(30+ 40);
// }

// add2();


// FUNCION IIFE , esta funcion se invoca  asi misma
// son utiles para proteger variables para que no se mezclen con las variables de otros archivos

// (function() {
//     console.log('Esto es una funcion IIFE');
// })();

// console.log(client);

//Diferencia entre funcion y metodo 


const num1 = 20;
const num2 = '10';

console.log(num1);
console.log(num2);
//Funccion que cconvierte de String a numero
console.log(parseInt(num2));

//un metodoo siempre colocamos una variable y despues un punto 

//Metodo que convierte un numero a String
console.log(num1.toString());