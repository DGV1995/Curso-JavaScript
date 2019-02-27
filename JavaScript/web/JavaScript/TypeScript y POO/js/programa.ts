// Clase padre
class Programa {

	constructor(
		protected nombre: string,
		protected version: number
	) {}

	/*protected nombre: string;
	protected version: number;*/

	/*constructor(nombre: string, version: number) {
		this.nombre = nombre;
		this.version = version;
	}*/

	public setNombre(nombre: string) {
		this.nombre = nombre;
	}

	public setVersion(version: number) {
		this.version = version;
	}

	public getNombre(): string {
		return this.nombre;
	}

	public getVersion(): number {
		return this.version;
	}

}

// Clase hija
class editorVideo extends Programa {

	private timeline: number;

	constructor(nombre: string, version: number, timeline: number) {
		super(nombre, version);
		this.timeline = timeline;
	}

	public setTimeline(timeline: number) {
		this.timeline = timeline;
	}

	public getTimeline(): number {
		return this.timeline;
	}

	public getAllData(): string {
		return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
	}

}

var editor = new editorVideo("OSCANN Desk 100", 1, 3000);
console.log(editor.getAllData());

editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor.getAllData());

