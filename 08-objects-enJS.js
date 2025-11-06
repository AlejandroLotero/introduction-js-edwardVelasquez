//Objetos en Js

const productName = "Multimetro";
const price = 150;
const available = true;

console.log(typeof productName);
console.log(price);
console.log(available);

const product = {
    productName : "Multimetro",
    price : 150,
    available : true,
}

console.log( typeof product);

//acceder a las propiedades de un objeto 
console.log("The product name  is " + product.productName);
console.log("The price  is " + product.price);
console.log("Is avaliable the product ? " + product.available);

//agregar propiedades al objeto 

product.image = "multimetro.png";
console.log(product);

///eeliminar una propiedad de un objeto

delete product.price;
console.log(product);
