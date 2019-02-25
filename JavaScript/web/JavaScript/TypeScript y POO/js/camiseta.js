// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // Métodos
    Camiseta.prototype.Constructor = function (color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setMarca("Adidas");
console.log("La marca de la camiseta es: " + camiseta.getMarca());
var camiseta2 = new Camiseta("Azul", "Manga corta", "Nike", "M", 45);
console.log(camiseta2);
