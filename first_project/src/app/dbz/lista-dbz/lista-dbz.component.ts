import { Component, Input } from '@angular/core';
import { Personaje } from '../personaje.model';
import { FormularioAgregarComponent } from '../formulario-agregar/formulario-agregar.component';
import { DbzService } from '../dbz.service';

@Component({
  selector: 'app-lista-dbz',
  templateUrl: './lista-dbz.component.html',
  styleUrls: ['./lista-dbz.component.sass']
})
export class ListaDbzComponent {
  title: string = "Personajes"



  constructor(private personajesService: DbzService) { }

  personajes: Personaje[] = this.personajesService.obtenerPersonajes();

}
