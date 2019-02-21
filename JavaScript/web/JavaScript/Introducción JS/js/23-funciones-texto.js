"use strict"

// Transformación de texto

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso";
var texto2 = "Hola mundo";

var busqueda = texto1.indexOf("curso"); //Me va a sacar dónde se encuentra (si existe) dicha palabra en la variable texto1
console.log(busqueda);

busqueda = texto1.lastIndexOf("curso"); //Última aparición
console.log(busqueda);

busqueda = texto1.search("curso"); //Lo mismo que indexOf()
console.log(busqueda);

busqueda = texto1.match(/curso/g); 
console.log(busqueda);

busqueda = texto1.substr(14,5); //Desde el caracter 14, me saca los 5 siguientes
console.log(busqueda);

busqueda = texto1.charAt(30); //Letra en el índice 30
console.log(busqueda);

busqueda = texto1.startsWith("Bi"); //También hay endsWith()
console.log(busqueda);

busqueda = texto1.includes("JavaScript");
console.log(busqueda);

//Reemplazar
busqueda = texto1.replace("JavaScript", "Guitarra");
console.log(busqueda);

busqueda = texto1.slice(14, 22); //Elimina todo el texto anterior al caracter 14 y posterior al 22
console.log(busqueda);

busqueda = texto1.split(" "); //Separa
console.log(busqueda);

texto1 = "    Bienvenido al curso de JavaScript curso   ";
busqueda = texto1.trim(); //Recorta los espacios y por detrás
console.log(busqueda);

/*
//Transformar número a string
var dato = numero.toString();
console.log(dato);

//Tranformar texto en minúsculas a mayúsculas
dato = texto1.toUpperCase();
console.log(dato);

//Tranformar texto en mayúsculas a minúsculas
dato = texto2.toLowerCase();
console.log(dato);

//Calcular longitud
var nombre = "Diego";
console.log("La longitud de " + nombre + " es: " + nombre.length);

var nombres = ["Diego", "Alicia", "Pepe"];
console.log(nombres.length); //3

//Concatenar (unir)
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);


//Otra forma
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);*/