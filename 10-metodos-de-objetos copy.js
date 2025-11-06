const product = {
    productName : "Multimetro",
    price : 150,
    available : true,
}

//con el metodo o funcion freeze bloqueamos el objjeto  para que no se puedan modificar / agregar, eliminar  propiedades a un objeto  
// Object.freeze(product);

// //eliminar
// delete product.price;
// //agregar
// product.color = "Yellow";
// product.quantity = 10;

// //modificar proepiedad
// product.price = 500;

// console.log(product);

//el metodo seal no permite eliminar, agregar, pero si modificar
Object.seal(product);

// //eliminar
delete product.price;

// //agregar
product.color = "Yellow";

// //modificar proepiedad
product.price = 500;

console.log(product);

console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));
