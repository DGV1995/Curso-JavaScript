// Interfaz
interface CamisetaBase {
	setColor(color);
	getColor();
}

// Decorador
function estampar(logo: string) {
	return function(target: Function) {
		target.prototype.estampacion = function(): void {
			console.log("camiseta estampada con el logo de " + logo);
		}
	}
}

// Clase (molde del objeto)
@estampar("Nike")
 class Camiseta implements CamisetaBase {

	// Propiedades (características del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	// Métodos
	constructor(color, modelo, marca, talla, precio) {
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}
	public setMarca(marca) {
		this.marca = marca
	}
	public getMarca() {
		return this.marca;
	}
	public setColor(color) {
		this.color = color;
	}
	public getColor(): string {
		return this.color;
	}

}

// Clase hija
class Sudadera extends Camiseta {

	public capucha: boolean;

	setCapucha(capucha: boolean) {
		this.capucha = capucha;
	}

	getCapucha(): boolean {
		return this.capucha;
	}
}

var camiseta = new Camiseta("Azul", "Manga corta", "Nike", "M", 45);
console.log(camiseta);
camiseta.estampacion();

var sudadera = new Sudadera("Rojo", "Marca larga", "Adidas", "L", 60);
sudadera.setCapucha(true);
console.log(sudadera);

