//desestructuracion de objetos en JS

//¿que es la desestructuracion de objetos
//En Js es una forma de extraer los valores de un objeto  y asignaros a variables de forma directa y más sencilla

const person = {
    userName : "Alejandro",
    age : 28,
}

console.log(person);

//variables o clave son por defecto
//desestructuracion

// const {userName, age} = person;
// console.log(userName);
// console.log(age);


//desestructuracion renombramiento de variables

// const {userName : personName, age : personaAge} = person;

// console.log(personName);
// console.log(personaAge);

//la desustruturacion no solo simplifica el acceso a propiedades , si no que tambien permite renombrar variables
//   segun se necesite


const people = person.userName;

console.log(people);

// ejemplo de extracción de datos de una respuesta de una API 

const response = {
    responseStatus : 200,
    data : {id : 1, productName : "Tablet", price : 800 },

};


const {responseStatus, data : {id, productName, price} } = response;

console.log(`el estado es : ${responseStatus}`);
console.log(productName);
console.log(price);
