import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaService {

	public zapatillas : Array<Zapatilla>;

	constructor() {
		this.zapatillas = [
			new Zapatilla("Nike AirForce1", "Nike", "Blanco", 100, true),
			new Zapatilla("Adidas Superstars", "Adidas", "Blanco", 110, false),
			new Zapatilla("Reebok Nano 5.0", "Reebok", "Gris", 85, true),
			new Zapatilla("Nike AirMax", "Nike", "Rojo", 130, false)
		];	
	}

	getTexto() {
		return "Hola mundo desde un servicio";
	}

	getZapatillas(): Array<Zapatilla> {
		return this.zapatillas;
	}
	

}