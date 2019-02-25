
// Clase (molde del objeto)
class Camiseta {

	// Propiedades (características del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	// Métodos
	Constructor(color, modelo, marca, talla, precio) {
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


var camiseta = new Camiseta();
camiseta.setMarca("Adidas");
console.log("La marca de la camiseta es: " + camiseta.getMarca());

var camiseta2 = new Camiseta("Azul", "Manga corta", "Nike", "M", 45);
console.log(camiseta2);

