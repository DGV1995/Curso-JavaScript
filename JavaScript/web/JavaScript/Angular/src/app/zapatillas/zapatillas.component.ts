import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component ({
	selector: "zapatillas",
	templateUrl: "./zapatillas.component.html"
})

export class ZapatillasComponent implements OnInit {
	public titulo: string = "Componente de zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas: string[];
	public color: string;
	public mi_marca: string;

	constructor() {
		this.color = "yellow";
		this.marcas = new Array();
		this.zapatillas = [
			new Zapatilla("Nike AirForce1", "Nike", "Blanco", 100, true),
			new Zapatilla("Adidas Superstars", "Adidas", "Blanco", 110, false),
			new Zapatilla("Reebok Nano 5.0", "Reebok", "Gris", 85, true),
			new Zapatilla("Nike AirMax", "Nike", "Rojo", 130, false)
		];	
	}

	ngOnInit() {
		console.log(this.zapatillas);
		this.getMarcas();
	}

	getMarcas() {
		this.zapatillas.forEach((element, index) => {
			if(this.marcas.indexOf(element.marca) < 0) // Para que no se repitan marcas
				this.marcas.push(element.marca);
		})
		console.log(this.marcas);
	}

	getMarca() {
		alert(this.mi_marca);
	}

	addMarca() {
		this.marcas.push(this.mi_marca);
	}

	borrarMarca(indice) {
		//delete this.marcas[indice];
		this.marcas.splice(indice, 1); //Borra 1 elemento a partir del índice reibido como parámetro
	}

	// Cuando hago click fuera del input
	onBlur() {
		console.log("Has salido del input");
	}

	// Cuando pulso la letra enter en el input
	mostrarPalabra() {
		alert(this.mi_marca);
	}

}