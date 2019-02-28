import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform {

	// dato | calculadora: otroDato
	// param1			   param2
	// Pasamos un dato que transformaremos con la pipe 'calculadora'
	transform(value: any, value_two: any) {

		let operaciones = `
			Suma: ${value + value_two} <br/>
			Resta: ${value - value_two} <br/>
			Multiplicación: ${value * value_two} <br/>
			División: ${value / value_two} <br/>
		`;

		return operaciones;

	}

}