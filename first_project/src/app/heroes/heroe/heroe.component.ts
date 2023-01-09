import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['../../app.component.sass']
})

export class HeroeComponent {
    title = "Trabajando con el componente Heroes";

    nombre: string = 'Ironman';
    edad: number = 45;
    poder: string = "lanzar rayos";

    obtenerNombre() {
        return `${this.nombre} = ${this.edad}`;
    }

    get nombreMay(): string {
        return this.nombre.toUpperCase();
    }

    cambiaNombre() {
        this.nombre = 'Spiderman';
    }
    cambiaEdad() {
        this.edad = 18;
    }

}