class Coche {

	/*private color: string;
	private modelo: string;
	private velocidad: number;

	constructor() {
		this.velocidad = 0;
	}*/

	// Ahorrar codigo
	constructor(
		private color: string,
		private modelo: string,
		private velocidad: number = 0
	){}

	public setColor(color: string) {
		this.color = color;
	}

	public getColor(): string {
		return this.color;
	}

	public setModelo(modelo: string) {
		this.modelo = modelo;
	}

	public getModelo(): string {
		return this.modelo;
	}

	public setVelocidad(velocidad: number) {
		this.velocidad = velocidad;
	}

	public getVelocidad(): number {
		return this.velocidad;
	}

	public acelerar() {
		this.velocidad++;
	}

	public frenar() {
		this.velocidad--;
	}

}

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
