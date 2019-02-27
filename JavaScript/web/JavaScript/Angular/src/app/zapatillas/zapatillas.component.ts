import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component ({
	selector: "zapatillas",
	templateUrl: "./zapatillas.component.html",
	providers: [ZapatillaService] //Servicios 
})

export class ZapatillasComponent implements OnInit {
	public titulo: string = "Componente de zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas: string[];
	public color: string;
	public mi_marca: string;

	constructor(
		//Inyectamos el servicio como una propiedad
		private _zapatillaService: ZapatillaService
	) {
		this.color = "yellow";
		this.marcas = new Array();
	}

	ngOnInit() {
		//Utilizamos el servicio
		this.zapatillas = this._zapatillaService.getZapatillas();
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