// Interfaz
interface CamisetaBase {
	setColor(color);
	getColor();
}

// Clase (molde del objeto)
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

}

var camiseta = new Camiseta("Azul", "Manga corta", "Nike", "M", 45);
console.log(camiseta);

