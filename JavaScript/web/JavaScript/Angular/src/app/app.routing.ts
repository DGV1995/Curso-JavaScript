// Importar los módulos del router de Angular
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

// Importar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";

// Array de configuración de las rutas
const appRoutes: Routes = [
	{path: "home", component: HomeComponent},
	{path: "zapatillas", component: ZapatillasComponent},
	{path: "videojuego", component: VideojuegoComponent},
	{path: "cursos", component: CursosComponent},
	{path: "cursos/:nombre", component: CursosComponent},
	{path: "cursos/:nombre/:followers", component: CursosComponent},
	{path: "externo", component: ExternoComponent},
	{path: "contacto", component: ContactoComponent},
	/*Ruta de error 404 --> siempre la última!*/
	{path: "**", component: HomeComponent}
];

// Exportar el módulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);