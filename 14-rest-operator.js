//Lo que se busca es no modificar el arreglo original

const months = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(months);


//crear un nuevo arreglo y lo unimos con otro

const newArray = [...months, 'May'];
console.table(newArray);


const newArray2 = ['October', ...newArray];
console.table(newArray2);