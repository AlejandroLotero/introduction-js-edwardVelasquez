//Se va a realizar un reproductor de cancciones

// Metodos de propiedad

const player =  {
    play : function(id) {
        return (`Reproducendo canciones...${id}`);
        
    },

    pause : function(id){
        return (`Pausando Cancion...${id}`);
    }
}

player.delete = function(id) {
    return `Eliminado  canción ${id}`;
}

console.log(player.play(1023));
console.log(player.pause(111));
console.log(player.delete(111));


player.lista = function(id) {
    return `reproducciendo lista  ${id}`;
}

