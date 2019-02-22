"use strict"

$(document).ready(function() {

	var elementos = $(".elemento");

	// Hacer que los elementos se puedan mover por la página
	elementos.draggable();

	// Redimensionar
	elementos.resizable();

	// Seleccionar elementos
	var lista = $(".lista-seleccionable");
	//lista.selectable();

	// Ordenar elementos
	lista.sortable({  // No puedo utilizarlo si está activo el método 'selectable()'
		update: () => {
			alert("Ha cambiado la lista");
		}
	}); 

	// Soltar y arrastrar (droppable)
	$("#elemento-movido").draggable(); // Para mover moverlo (obviamente)
	$("#area").droppable({ // Para que se puedan meter otros elementos dentro
		drop: () => {
			console.log("Has soltado algo dentro del area");
		}
	}); 

	// Efectos
	$("#mostrar").click(function() {
		$(".caja-efectos").toggle("blind", "slow"); // Con toggle podemos mostrar y ocultar algo haciendo uno de un solo botón
		// Mirar todos los efectos en la documentación de jQuery UI
	})

	// Tooltip 
	$(document).tooltip(); // Lo que aparecerá en el tooltip es el atributo 'title' del elemento
	// Dependiendo del tipo de plugin que quieras emplear, se utiliza un método u otro (http://iamceege.github.io/tooltipster/)

	// Cuadros de diálogo
	$("#lanzar-popup").click(function() {
		$("#popup").dialog();
	})

	// Calendario
	$("#calendario").datepicker(); // Cuando me meto dentro del input, me sale el calendario

	// Tabs (pestañas)
	$("#pestanas").tabs(); 

})