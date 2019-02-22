"use strict"

window.addEventListener("load", () => {

	$(document).ready(function() {

		// Elimino el atributo 'disabled' del botón
		$("#add_button").removeAttr("disabled").click(function() {
			/*
			// Con el método html() puedo incrustar código html en el elemento que queramos, pero machaca lo que había antes
			$("#menu").html("<li><a href='" + $("#add_link").val() + "'></a></li>");*/
			$("#menu").append("<li><a href='" + $("#add_link").val() + "'></a></li>");
			// prepend() lo añade como primer elemento de la lista
			// before() lo añade antes de la lista
			// after() lo añade después de la lista
			$("#add_link").val("");
			reloadLinks(); // No funciona esta función
		})

		// Bucle for-each en las etiquetas 'a'
		$("a").each(function() {
			var that = $(this);
			var enlace = that.attr("href");
			// Añado el atributo target="_blank" al elemento 'a'
			that.attr("target", "_blank"); // Para abrir en enlace en una pestaña nueva
			that.text(enlace);
		})

	})

})