var bicicleta = {
	color: "Rojo",
	modelo: "BMX",
	frenos: "De disco",
	velocidadMaxima: "60km/h",

	cambiaColor: function(nuevo_color) {
		this.color = nuevo_color;
		console.log(this);
	},

	getFrenos: function() {
		console.log(this.frenos);
	}
};

console.log(bicicleta);

bicicleta.cambiaColor("Azul");
