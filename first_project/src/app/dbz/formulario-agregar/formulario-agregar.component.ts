import { Component } from '@angular/core';
import { DbzService } from '../dbz.service';
import { Personaje } from '../personaje.model';

@Component({
  selector: 'app-formulario-agregar',
  templateUrl: './formulario-agregar.component.html',
  styleUrls: ['./formulario-agregar.component.sass']
})
export class FormularioAgregarComponent {

  title: string = "Agregar Nuevo Personaje";
  nombre: string = "";
  poder: number = 0;

  personajes: Personaje[] = []

  constructor(private personajesService: DbzService) { }

  agregarPersonaje() {
    if (this.nombre === "" || this.poder === 0) {
      alert(`Los campos no pueden estar vacíos`)
    } else {
      let personaje = new Personaje(this.nombre, this.poder);
      this.personajesService.agregaPersonaje(personaje);
      alert(`Personaje agregado correctamente`)
    }

  }

}
