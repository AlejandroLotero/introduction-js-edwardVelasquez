//Metodos para arreglos

// const numbers = [2,5,8,10,25,89,90,14,25,68];


//agregar elementos  a mi arreglo pero se requiere conocer la longitud del arreglo
// numbers [5] = 100;
// console.table(numbers);


// el metodo push agrega los elementos al final del objeto

// numbers.push(1000, 500);

//metodo para agtregar elementos al inicio del arreglo
// numbers.unshift(-2, -1, 0);
// console.table(numbers);

//elimina el ultimo elemento del objeto
// numbers.pop();

//elimina el primer elemento del objeto
// numbers.shift();
// console.table(numbers);

//elimina la cantidad de elementos a partir del indice asignado
// numbers.splice(3);
// console.table(numbers);



const fruver = ["Mango", "Piña", "Melon", "Pera"];

fruver.push("Lulo");

console.table(fruver);


fruver.unshift ("Manzana");
console.table(fruver);

//Metodo splice elimina todos los elementos a partir  del indice asignado
fruver.splice(3);
console.table(fruver);




//recorres un arreglo con for

const colors = ['Red', 'Blue', 'Green'];
for (let i = 0; i< colors.length; i++) {
    console.log(colors[i]);

}

//Recorrer un arreglo con ForEach
const animals = ['Tiger', 'Cat', 'Dog'];
animals.forEach((animal) => {
    console.log(animal);

})


//Map para transformar

const numbers = [12,3,8,14,25,89,90,14,25,68];
const squares = numbers.map(num => num * num);

console.log(squares);
