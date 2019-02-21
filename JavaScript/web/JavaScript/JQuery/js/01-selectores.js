"use strict"

window.addEventListener("load", () => {

	//jQuery(document).ready() --> El símbolo '$' y la palabra 'jQuery' son lo mismo!
 	$(document).ready(function() {

 		console.log("jQuery y la web cargados");

 		// SELECTOR DE ID 
 		var rojo = $("#rojo");
 		rojo.css("color", "white")
 			.css("background", "red"); // Primer parámetro = clave
 									  // Segundo parámetro = valor
 		$("#amarillo").css("background", "yellow").css("color", "green");

 		$("#verde").css("background", "green").css("color", "white");

 		// SELECTOR DE CLASES
 		var mi_clase = $(".zebra"); // Array con todos los elementos que tengan class="zebra"

 		mi_clase.css("padding", "5px"); //Borde negro discontinuo y espaciado entre el texto y los bordes superior e inferior

 		//Podemos añadir eventos a los elementos con jQuery.
 		$(".sin_borde").click(function() { //Añadimos evento de 'click'
 			console.log("Click");
 			$(this).addClass("zebra"); // Para usar el 'this', la función de callback debe estar como función anónima (function() {}) en vez de como función de flecha ( () => {} )
 		});

 		// SELECTOR DE ETIQUETAS
 		var parrafos = $("p").css("cursor", "pointer"); // Para que aparezca el dedo cuando pasamos el cursor por encima suya

 		parrafos.click(function() {
 			var that = $(this); // Así accedemos al DOM solo una vez
 			if (!that.hasClass("grande"))
 				that.addClass("grande");
 			else
 				that.removeClass("grande");
 		})

 		// SELECTOR DE ATRIBUTOS
 		$("[title = 'Google']").css("background", "#ccc"); // Color gris claro
 		$("[title = 'Marca']").css("background", "red");

 		// OTROS
 		//$("p, a").addClass("margen-superior");
 		var busqueda = $("#caja").find(".resaltado"); // Igual que $("#caja .resaltado")

 		var caja = busqueda.eq(0).parent().parent(); // #caja

 	});

});