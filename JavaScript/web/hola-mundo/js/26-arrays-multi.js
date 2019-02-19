"use strict"

var categorias = ["Accion", "Terror", "Coomedia"];
var peliculas = ["El senior de los anillos", "El hobbit", "Gran Torino"];

//Ordenar un array
console.log(peliculas.sort());
console.log(peliculas.reverse()); //Inverso de sort()

var cine = [categorias, peliculas];

console.log(cine[0][1]); //Terror
console.log(cine[1][2]); //Gran Torino

//Operaciones con arrays

var elemento = prompt("Introduce nueva pelicula:", "");
peliculas.push(elemento); //Añadimos una pelicula en el array
console.log(peliculas);

//peliculas.pop(); //Elimino el último elemento del array

var indice = peliculas.indexOf("El hobbit");
console.log(indice);

if (indice > -1)
	peliculas.splice(indice, 1); //Elimina n elementos (1 en este caso) a partir del índice indicado

console.log(peliculas);

//Convertir un array en un texto en el que cada elemento está separado por comas
console.log(peliculas.join());

//Convertir un string en un array
var cadena = "texto1,texto2,texto3";

var cadena_array = cadena.split(",");
console.log(cadena_array);






