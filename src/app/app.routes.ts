import { Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
    {path: "acerca-de", component: AcercaDeComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "galeria", component: GaleriaComponent}
];
