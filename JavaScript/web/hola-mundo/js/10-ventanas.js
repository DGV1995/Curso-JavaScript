"use strict"

// ALERTA
alert("Esta es mi alerta");

// CONFIRMACIÓN
var mi_resultado = confirm("Estas seguro de querer continuar?"); //Devuelve 'true' o 'false'
console.log(mi_resultado);

// INGRESO DE INFORMACIÓN
var edad = prompt("Que edad tienes?", 18); //El segundo parámetro es el valor por defecto que tendrá la función en el caso de no ingresar nada
console.log(edad);
console.log(typeof edad);