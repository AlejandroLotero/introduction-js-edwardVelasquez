//String o cadena de texto

const userName = "Alejandro";
const name1 = 'Andres';

//ver tipo de dato
//console.log(typeof userName);

//Dos formas no tan comunes

const userName2 = String("Vero");

/// Creamos una variable  mediante el constructor instanciando a parttri de la clase new
const userName3 = new  String("Vero");
//Instanciar es el rpoceso mediante el cual yo creo un objeto a partir de una clase
console.log(typeof userName3);

//El constructor es un metodo que permite incializar un objeto a partir de una clase y permite llamarlo desde cualquier parte

let product = 'Televisor de 50"';


console.log(product);

let product2 = "Televisor de 50\"";
console.log(product2);

let phrase = "Estamos aprendiendo JS en el CDITI";
console.log(phrase.length);
//Busca si una cadena existe  y me da su indexación
//Si el resultado es menor que cero, la cadena no existe
console.log(phrase.indexOf("JS"));

//Metodo más moderno para busar si una cadena existe
console.log(phrase.includes("JS"));

