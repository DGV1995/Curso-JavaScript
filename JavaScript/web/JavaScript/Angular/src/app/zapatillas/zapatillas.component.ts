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

	constructor() {
		this.zapatillas = [
			new Zapatilla("Nike AirForce1", "Nike", "Blanco", 100, true),
			new Zapatilla("Adidas Superstars", "Adidas", "Blanco", 110, false),
			new Zapatilla("Reebok Nano 5.0", "Reebok", "Gris", 85, true),
			new Zapatilla("Nike AirMax", "Nike", "Rojo", 130, false)
		];
		this.marcas = new Array();
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

}