//This js

//This es una palabra reservada del sistema y no podemos usarla para definir variables, metodos, o funciones

const reservation = {
    userName : 'ALEJANDRO',
    lastName : 'LOTERO',
    userAge : 28,
    totalPay : 4200000,
    isPayed : true,



    informartion : function() {
        console.log(`El cliente ${this.userName} reservó  y la cantidad a pagar es  ${this.totalPay}`);
        
    }
}


console.log(reservation.informartion());
console.log(reservation.lastName);


const reservation2 = {
    userName : 'ALEJANDRO',
    lastName : 'LOTERO',
    userAge : 28,
    totalPay : 4200000,
    isPayed : true,



    informartion : () => {
        return (`El cliente ${userName} reservó  y la cantidad a pagar es  ${totalPay}`);
        
    }
}


console.log(reservation2.informartion());