//Metodos para arreglos 

//Arreglo de meses
const months = new Array('Enero', 'Febrero', 'Marzo', 'January', 'Mayo');

//crear un arreglo de objetos para un carrito de compras

const shoppingCart = [
    {productName : 'Tablet', price : 800},
    {productName : 'Mouse', price : 50},
    {productName : 'Smart Tv', price : 1500},
    {productName : 'Computer', price : 2000},
    {productName : 'PS5', price : 1800},
    {productName : 'X-box', price : 1800},
    {productName : 'Nintendo Wii', price : 900},
    {productName : 'KeyBorad', price : 400},
    {productName : 'Sound-Bar', price : 700},
    
]
//Recorre el arreglo y muestra todos los elementos
// months.forEach(function(month) {
//     console.log(month)
// })


// months.forEach(function(month) {
//     if (month == 'January') {
//         console.log('January si Existe');
//     }else {
//         console.log('El mes no existe');
//     }
//      console.log(month)
// })



const month = months.includes('December');
console.log(month);

//el metodo include no funciona bien en objetos dentro de objetos
// const product = shoppingCart.includes('Tablet')
// console.log(produt);


//En conclusion para rreglos planos usamos includes y para objetos some
// const result = shoppingCart.some(function(product) {
//     return product.productName === 'Tablet';
// })

// const result = shoppingCart.some(product => product.productName === 'Tablet');
// console.log(result);


//metodo reduce nos sirve para realizar la sumatoria de los precios
// const result = shoppingCart.reduce(function(total, product) {
//     return total + product.price
// }, 0);

// const result = shoppingCart.reduce((total,product) => total + product.price, 0)
// console.log(result);


//Metodo Filter
// const result = shoppingCart.filter(function(product) {
//     return product.price < 100;
// })
// console.log(result);


// const result = shoppingCart.filter(product  => product.price < 100);
// console.log(result);


// const result = shoppingCart.filter(product  => product.productName ==='Sound-Bar');
// console.log(result);


const result = shoppingCart.filter(product  => product.productName != 'Sound-Bar');
console.log(result);