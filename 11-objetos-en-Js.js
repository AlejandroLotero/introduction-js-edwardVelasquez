
// unir dos Objetos


const product = {
    productName : "Multimetro",
    price : 150,
    available : true,
}


Object.freeze(product);

//objeto que almacena medidas

const measurements = {
    weight : "1Kg",
    measurement : "15cm",
   
}

const measurements3 = {
    weigh2t : "1K2g",
    measure2ment : "15c16m",
   
}

//Rest operator para unir varios objetos

const newProduct = {...product, ...measurements,...measurements3}
console.log(newProduct);

