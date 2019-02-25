// String
let cadena: string = "Diego García-Viana";
console.log(cadena);

// Number
let numero: number = 10;
console.log(numero);

// Booleano
let verdadero_falso: boolean = true;

// Any (le puedo meter cualquier tipo de valor)
let cualquiera: any;

// Arrays
var lenguajes: Array<string> = ["Java", "JavaScript", "Python"];
console.log(lenguajes);

let years: number[] = [12, 13, 14];
console.log(years);


let string_o_numero: string | number = "cadena"; // Podemos definir varios tipos distintos de datos para una misma variable
string_o_numero = 10;
console.log(string_o_numero);

// Tipos de datos personalizados
type alfanumerico = string | number;
var alfa: alfanumerico = 15;
console.log(alfa);
alfa = "Cadena";
console.log(alfa);

// Let vs Var
var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
	let numero1 = 44; // Esta variable actúa solo en este bloque --> Variable local
	var numero2 = 55;
	console.log(numero1, numero2); // 44, 55
}

console.log(numero1, numero2); // 10, 55

