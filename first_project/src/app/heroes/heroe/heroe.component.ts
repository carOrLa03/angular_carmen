import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['../../app.component.sass']
})

export class HeroeComponent {
    title = "Trabajando con el componente Heroes";
    poder: string = "lanzar rayos";

}