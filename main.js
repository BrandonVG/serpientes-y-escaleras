class Dado{
    constructor(){}
    girar(){
        return Math.ceil(Math.random()*6);
    }
}
class Tablero{
    constructor(){
        this.escalerasI = [2,8,21,28,36,51,71,78];
        this.escalerasF = [38,31,42,84,44,67,91,98];
        this.serpientesI = [16,46,49,62,64,74,89,99];
        this.serpientesF = [6,25,11,19,60,53,68,80];
    }
    escalera(posicion){
        for (let i = 0; i < 8;i++){
            if (posicion == this.escalerasI[i]){
                posicion = this.escalerasF[i];
                return posicion;
            }
        }
        return posicion;
    }
    serpiente(posicion){
        for (let i = 0; i < 8;i++){
            if(posicion == this.serpientesI[i]){
                posicion = this.serpientesF[i];
                return posicion;
            }
        }
        return posicion;
    }
}
class Jugador{
    constructor(){
        this.posicion = 0;
    }
    avanzar(dado,tablero){
        let cara = dado.girar();
        this.posicion += cara;
        this.posicion = tablero.escalera(this.posicion);
        this.posicion = tablero.serpiente(this.posicion);
        return this.posicion;
    }
}
let tablero = new Tablero();
let dado = new Dado();
let j1 = new Jugador();
let j2 = new Jugador();
while (j1.posicion < 100 && j2.posicion < 100){
    console.log("El jugador 1 va en " + j1.avanzar(dado,tablero) +  " el jugador 2 va en " +
    j2.avanzar(dado,tablero));
}
if (j1.posicion >= 100 && j2.posicion >= 100){
    console.log("Fue un empate");
}
else if(j1.posicion >= 100){
    console.log("El jugador 1 gano");
}
else{
    console.log("El jugador 2 gano");
}