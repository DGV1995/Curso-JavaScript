"use strict"

$(document).ready(function() {

	var caja = $("#caja");

	$("#mostrar").hide();

	$("#mostrar").click(function() {
		$(this).hide();
		$("#ocultar").show();
		//caja.show("slow"); //normal, fast, slow

		// Efecto de fundido
		//caja.fadeIn("slow");

		// De una opacidad a otra
		caja.fadeTo("slow", 0.8);
	})

	$("#ocultar").click(function() {
		$(this).hide();
		$("#mostrar").show();
		//caja.hide("slow");
		//caja.fadeOut("slow");
		caja.fadeTo("slow", 0.2);
	})

	// Efecto toggle()
	$("#todoenuno").click(function() {
		caja.toggle("fast");
		// fadeToggle(), slideToggle(), etc
	})

	// Animaciones personalizadas
	$("#animar").click(function() {
		caja.animate({
						marginLeft: "500px", 
						fontSize: "40px",
						height: "110px"
					}, "slow")
			.animate({
						borderRadius: "900px", 
						marginTop: "100px"
					}, "slow")
			.animate({
						borderRadius: "0px",
						marginTop: "0px",
						borderRadius: "900px"
					}, "slow");
	})

})