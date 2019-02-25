// String
var cadena = "Diego García-Viana";
console.log(cadena);
// Number
var numero = 10;
console.log(numero);
// Booleano
var verdadero_falso = true;
// Any (le puedo meter cualquier tipo de valor)
var cualquiera;
// Arrays
var lenguajes = ["Java", "JavaScript", "Python"];
console.log(lenguajes);
var years = [12, 13, 14];
console.log(years);
var string_o_numero = "cadena"; // Podemos definir varios tipos distintos de datos para una misma variable
string_o_numero = 10;
console.log(string_o_numero);
var alfa = 15;
console.log(alfa);
alfa = "Cadena";
console.log(alfa);
// Let vs Var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44; // Esta variable actúa solo en este bloque --> Variable local
    var numero2 = 55;
    console.log(numero1_1, numero2); // 44, 55
}
console.log(numero1, numero2); // 10, 55
