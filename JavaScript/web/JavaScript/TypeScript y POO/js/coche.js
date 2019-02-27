var Coche = /** @class */ (function () {
    /*private color: string;
    private modelo: string;
    private velocidad: number;

    constructor() {
        this.velocidad = 0;
    }*/
    // Ahorrar codigo
    function Coche(color, modelo, velocidad) {
        if (velocidad === void 0) { velocidad = 0; }
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche = new Coche("Azul", "Limusina", 10);
console.log("El color del coche 1 es " + coche.getColor());
console.log("Su velocidad es de " + coche.getVelocidad() + " km/h");
coche.setColor("rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
console.log("El color del coche 1 es " + coche.getColor());
console.log("Su velocidad es de " + coche.getVelocidad() + " km/h");
/*
var coche_dos = new Coche();
var coche_tres = new Coche();

coche_dos.setColor("azul");
coche_tres.setColor("blanco");

console.log("El color del coche 2 es " + coche_dos.getColor());
console.log("El color del coche 3 es " + coche_tres.getColor());*/
