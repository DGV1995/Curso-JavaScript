"use strict"

window.addEventListener("load", function() {

	$(document).ready(function() {

		// MOUSEOVER Y MOUSEOUT
		var caja = $("#caja");

		/*
		caja.mouseover( function() {
			$(this).css("background", "red");
		});

		caja.mouseout( function() {
			$(this).css("background", "green");
		})*/

		// HOVER
		function cambiaRojo() {
			$(this).css("background", "red");
		}

		function cambiaVerde() {
			$(this).css("background", "green");
		}

		caja.hover(cambiaRojo, cambiaVerde); // Tiene dos funciones de callback

		// CLICK y DOBLECLICK
		caja.click(function() {
			$(this).css("background", "blue").css("color", "white");
		})

		caja.dblclick(function() {
			$(this).css("background", "green").css("color", "white");
		})

		// FOCUS y BLUR
		var nombre = $("#nombre");
		var datos = $("#datos");

		nombre.focus(function() {
			$(this).css("border", "2px solid green");
			$("#datos").hide();
		});

		nombre.blur(function() {
			$(this).css("border", "1px solid #ccc");
			//$(this).val(); // Saco el valor
			datos.text($(this).val()).show();
		});

		// MOUSEDOWN y MOUSEUP
		datos.mousedown(function() { // Cuando pulsas el ratón
			$(this).css("border-color", "gray");
		})
		datos.mouseup(function() { // Cuando dejas de pulsar
			$(this).css("border-color", "black");
		})

		// MOUSEMOVE
		$(document).mousemove(function() {
			$("body").css("cursor", "none"); //Ocultamos el cursor para dejar solo la bola
			var sigueme = $("#sigueme");
			sigueme.css("left", event.clientX); // El elemento 'sigueme' va a seguir al ratón (coordenada X);
			sigueme.css("top", event.clientY); // El elemento 'sigueme' va a seguir al ratón (coordenada Y);
		})

	})

})