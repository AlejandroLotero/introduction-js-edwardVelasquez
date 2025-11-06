
///los arreglos de numeros 

//const number = [2,5,8,10,25,89];

//console.log(typeof number);

//instaciar es el proceso mediante el cual creo un objeto a partir de una clase
const months = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

console.table(months);

// los arreglos en Js aceptan todo los tipos de datos del lenguaje
const userName = "Alejandro";

const myArray = ["Hello", userName, 42, true, false, null,{lastName: "Lotero", myJob : "Software enginner"}, [2999912, 4852, 11111]];

console.log(myArray);
//consultar  el tipo de variables y el valor del elemento 
console.log(typeof myArray[2]);

console.log(typeof myArray[6]);

console.log(userName + " Tu array tiene " + myArray.length + " elemntos");



const numbers = [2,5,8,10,25,89,90,14,25,68];


//Iterador con forEach

numbers.forEach(function(number) {
    console.log(number);

})

months.forEach(function(month) {
    console.log(month);
})